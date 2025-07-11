from flask import Flask, send_from_directory, abort
from flask_cors import CORS
from pathlib import Path

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

DATA_DIR = Path(__file__).resolve().parent / "data"

@app.route("/json/<path:filename>")
def serve_json_file(filename):
    file_path = DATA_DIR / filename
    if not file_path.exists():
        abort(404, description="File not found")
    return send_from_directory(DATA_DIR, filename, mimetype="application/json")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
