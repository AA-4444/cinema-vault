#!/usr/bin/env python3
"""Simple SPA server — serves index.html for all non-file routes."""
import http.server
import os
import socketserver
from urllib.parse import urlparse

SERVE_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = 8080

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SERVE_DIR, **kwargs)

    def translate_path(self, path):
        # Strip query string before translating to file path
        parsed = urlparse(path)
        return super().translate_path(parsed.path)

    def do_GET(self):
        # Get clean path without query string
        parsed = urlparse(self.path)
        clean_path = parsed.path
        full_path = os.path.join(SERVE_DIR, clean_path.lstrip('/'))

        if os.path.isfile(full_path):
            # Serve the actual file
            super().do_GET()
        else:
            # Serve index.html for all SPA routes
            self.path = '/index.html'
            super().do_GET()

    def log_message(self, format, *args):
        pass  # Suppress logs

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
        print(f"Serving SPA on port {PORT}")
        httpd.serve_forever()
