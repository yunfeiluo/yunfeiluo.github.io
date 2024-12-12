import http.server
import socketserver

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Disable caching
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

PORT = 4000

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
