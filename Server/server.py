from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/message', methods=['GET'])
def home():
    return {"message": ["Hola soy alan", "Hola soy jorge", "Hola soy luis"]}

@app.route('/message/<int:id>', methods=['GET'])
def message(id):
    return {"message": ["Hola soy alan", "Hola soy jorge", "Hola soy luis"[id]]}

if __name__ == '__main__':
    app.run(debug=True)
