from flask import Flask
from flask_cors import CORS
from mongoController import getQuestion
from flask import request

app = Flask(__name__)
CORS(app)


@app.route('/question', methods=['GET', 'POST'])
def question():
    if request.method == 'POST':
        print(f'RESPUESTA = {request.json}')
        print(f'ID = {request.json["id"]}')
        id = str(request.json['id'])
        print(f'TYPE = {type(id)}')
        questionJSON = getQuestion(id)
        print(f'QUESTION = {questionJSON}')
        
        




if __name__ == '__main__':
    app.run(debug=True)