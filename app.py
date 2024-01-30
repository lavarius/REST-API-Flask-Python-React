from flask import Flask, jsonify, request

app = Flask(__name__)

# In-memory database for demonstration purposes
FAKE_DB = []

@app.route('/items', methods=['GET'])
def get_items():
    return jsonify(FAKE_DB)

@app.route('/items', methods=['POST'])
def add_item():
    item = request.json
    FAKE_DB.append(item)
    return jsonify(item), 201

@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    item = request.json
    FAKE_DB[item_id] = item
    return jsonify(item)

@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    FAKE_DB.pop(item_id)
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)