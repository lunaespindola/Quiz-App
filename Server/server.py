"""
    @Author: AlanGallegosEsp
    @Author: PauAM10
    @Date: 5/23/2023
    @last update: 5/23/2023 10:24 PM
"""

from flask import Flask
from flask_cors import CORS
from mongoController import getQuestion, createUser
from flask import request
from flask import jsonify
from flask import Response
from datetime import datetime
import random


app = Flask(__name__)
CORS(app)


@app.route('/question', methods=['GET', 'POST'])
def question():
    if request.method == 'POST':
        id = int(request.json['id'])
        questionJSON = getQuestion(id)
        return jsonify(questionJSON)

@app.route('/api/getQuestions', methods=['POST'])
def getQuestions():
    numQuestions = int(request.json['numQuestions']) 
    randomList = random.sample(range(1, 3), numQuestions)
    questions = []
    for i in range(1,randomList+1):
        questions.append(getQuestion(i))
    return jsonify(questions)

@app.route('/api/users', methods=['POST'])
def create_user():
    user = {"Name": request.json['name'], "Number_of_questions": request.json['numQuestions'], "Time": datetime.now()}
    createUser(user)
    return Response("201")

    
        

if __name__ == '__main__':
    app.run(debug=True)