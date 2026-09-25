"""Tiles reference screenshots with labels into one image for visual review.

Usage: python3 tools/contact-sheet.py <out.jpg> <id> [<id> ...]. Reads assets/references/<id>.jpg, 2 columns at 720 px.
Write the sheet to your own scratchpad subfolder; parallel agents share scratch space.
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
if len(sys.argv) < 3:
    sys.exit(__doc__)
out, ids = sys.argv[1], sys.argv[2:]
W, H, LABEL = 720, 450, 16
rows = (len(ids) + 1) // 2
sheet = Image.new("RGB", (W * 2, (H + LABEL) * rows), "white")
draw = ImageDraw.Draw(sheet)
for i, ref in enumerate(ids):
    image = Image.open(ROOT / "assets" / "references" / f"{ref}.jpg").convert("RGB")
    image.thumbnail((W, H))
    x, y = (i % 2) * W, (i // 2) * (H + LABEL)
    sheet.paste(image, (x, y + LABEL))
    draw.text((x + 4, y + 2), ref, fill="black")
sheet.save(out, quality=88)
print(f"{out}: {len(ids)} captures, {rows} rows")
