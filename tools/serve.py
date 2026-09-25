"""Serves the catalogue on 127.0.0.1 and saves measurements that pages POST to /measurements/<id>.

Usage: python3 tools/serve.py [port]. In a page: fetch("http://127.0.0.1:<port>/measurements/<id>", {method: "POST", body}).
Only writes data/measurements/<id>.json, where <id> is a catalogue slug, and only accepts JSON from tools/extract-traits.js.
"""

import json
import re
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SLUG = re.compile(r"^/measurements/([a-z0-9]+(?:-[a-z0-9]+)*)$")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        # Chrome's Private Network Access preflight for https pages that call a local address.
        self.send_header("Access-Control-Allow-Private-Network", "true")

    def do_OPTIONS(self):
        self.send_response(204)
        self.cors()
        self.end_headers()

    def do_POST(self):
        match = SLUG.match(self.path)
        length = int(self.headers.get("Content-Length", 0))
        try:
            data = json.loads(self.rfile.read(min(length, 2_000_000)))
            if not match or data.get("tool") != "tools/extract-traits.js":
                raise ValueError("expected POST /measurements/<id> with extract-traits.js output")
        except ValueError as error:
            self.send_response(400)
            self.cors()
            self.end_headers()
            self.wfile.write(str(error).encode())
            return
        path = ROOT / "data" / "measurements" / f"{match.group(1)}.json"
        path.write_text(json.dumps(data, indent=2) + "\n")
        self.send_response(201)
        self.cors()
        self.end_headers()
        self.wfile.write(f"saved {path.relative_to(ROOT)}".encode())


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8766
    print(f"Serving {ROOT} on http://127.0.0.1:{port}")
    ThreadingHTTPServer(("127.0.0.1", port), Handler).serve_forever()
