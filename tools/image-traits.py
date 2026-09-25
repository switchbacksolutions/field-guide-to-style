"""Measures the palette of an image file and prints JSON with the same color.* metric names as extract-traits.js.

Usage: python3 tools/image-traits.py <image> [--out data/measurements/<id>.json]. Needs Pillow.
"""

import colorsys
import json
import sys
from datetime import datetime, timezone

from PIL import Image

VERSION = "4"


def measure(path):
    image = Image.open(path).convert("RGB")
    image.thumbnail((400, 400))
    # 32 median-cut colors refined by k-means keep small saturated areas (a red bar on a poster) from averaging into
    # the ground. Near-duplicates then merge as in extract-traits.js.
    quantized = image.quantize(colors=32, method=Image.Quantize.MEDIANCUT, kmeans=4)
    raw = quantized.getpalette()
    counts = sorted(quantized.getcolors(), reverse=True)
    total = sum(n for n, _ in counts)
    palette = []
    for n, index in counts:
        rgb = tuple(raw[index * 3 : index * 3 + 3])
        near = next((p for p in palette if sum((a - b) ** 2 for a, b in zip(p["rgb"], rgb)) ** 0.5 < 18), None)
        if near:
            near["share"] += n / total
        else:
            palette.append({"rgb": rgb, "share": n / total})
    palette.sort(key=lambda p: -p["share"])

    # Chroma (max minus min channel), matching extract-traits.js.
    def chroma(rgb):
        return (max(rgb) - min(rgb)) / 255

    mean_chroma = sum(chroma(p["rgb"]) * p["share"] for p in palette)
    lightness = sum((max(p["rgb"]) + min(p["rgb"])) / 510 * p["share"] for p in palette)
    colored = [p for p in palette if chroma(p["rgb"]) >= 0.3]
    chromatic = sum(p["share"] for p in colored)
    accent_chroma = sum(chroma(p["rgb"]) * p["share"] for p in colored) / chromatic if chromatic else None
    return {
        "tool": "tools/image-traits.py",
        "version": VERSION,
        "file": path,
        "captured": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "color": {
            "palette": [{"hex": "#%02x%02x%02x" % p["rgb"], "share": round(p["share"], 3)} for p in palette[:10]],
            "background": "#%02x%02x%02x" % palette[0]["rgb"],
            "chroma": round(mean_chroma, 2),
            "lightness": round(lightness, 2),
            "chromaticShare": round(chromatic, 2),
            "accentChroma": round(accent_chroma, 2) if accent_chroma is not None else None,
            "distinct": sum(1 for p in palette if p["share"] >= 0.02),
            "hues": len({int(colorsys.rgb_to_hsv(*(v / 255 for v in p["rgb"]))[0] * 12) % 12 for p in colored if p["share"] >= 0.003}),
        },
    }


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    result = json.dumps(measure(args[0]), indent=2)
    if "--out" in args:
        with open(args[args.index("--out") + 1], "w") as f:
            f.write(result + "\n")
    else:
        print(result)
