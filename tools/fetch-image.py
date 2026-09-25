"""Downloads an image for a reference record and prints its final size.

Usage: python3 tools/fetch-image.py <url> <out-path> [--store]. Without --store it saves as-is (for viewing in a
scratchpad). With --store it resizes to at most 1600 px on the long side and saves JPEG quality 82 (PNG stays PNG).
"""

import io
import sys
from pathlib import Path

from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from fetch import fetch  # noqa: E402

if len(sys.argv) < 3:
    sys.exit(__doc__)
url, out = sys.argv[1], Path(sys.argv[2])
if out.exists():
    sys.exit(f"{out} exists. Another agent may have written it; choose another id or remove your own file first.")
data = fetch(url)
if "--store" not in sys.argv:
    out.write_bytes(data)
    print(f"{out}: {Image.open(io.BytesIO(data)).size}")
    sys.exit()
image = Image.open(io.BytesIO(data))
image.thumbnail((1600, 1600))
if out.suffix.lower() == ".png":
    image.save(out, optimize=True)
else:
    image.convert("RGB").save(out, quality=82)
print(f"{out}: width {image.width}, height {image.height}")
