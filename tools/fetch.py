"""Fetches a URL for research with a proper User-Agent and prints the body; --json pretty-prints tolerant JSON.

Usage: python3 tools/fetch.py <url> [--json]. Use it instead of curl, whose output a shell hook truncates here.
Retries HTTP 429 and timeouts with backoff, because parallel agents share one address and hit rate limits.
"""

import http.client
import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

USER_AGENT = "style-inspiration-research/0.1 (catalogue research)"


def fetch(url, attempts=4):
    url = urllib.parse.quote(url, safe=":/?&=%#@+,;~*'()!$")
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(request, timeout=40) as response:
                return response.read()
        except urllib.error.HTTPError as error:
            if error.code != 429 or attempt == attempts - 1:
                raise SystemExit(f"HTTP {error.code} for {url}. For 403, read the page in Claude in Chrome if it has permission.")
        except (TimeoutError, http.client.IncompleteRead, urllib.error.URLError) as error:
            if attempt == attempts - 1:
                raise SystemExit(f"{type(error).__name__} for {url} after {attempts} attempts.")
        time.sleep(30 * (attempt + 1))


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    body = fetch(sys.argv[1]).decode("utf-8", "replace")
    print(json.dumps(json.loads(body, strict=False), indent=2, ensure_ascii=False) if "--json" in sys.argv else body)
