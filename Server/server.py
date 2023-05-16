from flask import Flask

app = Flask(__name__)

@app.route('/message')
def home():
    return {"message": ["Hello World!", "Hello World!", "Hello World!", "Hello World!", "Hello World"]}

if __name__ == '__main__':
    app.run(debug=True)

