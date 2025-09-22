from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Test route
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Flask!"})

# Route to accept data from frontend
@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.json  # expect JSON from frontend
    name = data.get("name", "Guest")
    return jsonify({"message": f"Hello, {name}!"})

if __name__ == "__main__":
    app.run(debug=True)
