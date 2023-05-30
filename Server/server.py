"""
    @Author: AlanGallegosEsp
    @Author: PauAM10
    @Date: 5/23/2023
    @last update: 5/23/2023 10:24 PM
"""

from flask import Flask
from flask_cors import CORS
from mongoController import getQuestion, createUser, verifyUser, getTopScores, addScore
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
    randomList = random.sample(range(1,26), numQuestions)
    questions = []
    if numQuestions ==  1:
        questions.append(getQuestion(1))
        return jsonify(questions)
    else:
        for i in randomList:
            questions.append(getQuestion(i))
        return jsonify(questions)

@app.route('/api/users', methods=['POST'])
def create_user():
    user = {"Username": request.json['username'], "Number_of_questions": request.json['numQuestions'], "Time": datetime.now()}
    res = verifyUser(user["Username"])
    if res == None:
        createUser(user)
        return "User created", 201
    else:
        return "User already exists" 
    
@app.route('/api/scores', methods=['GET'])
def get_scores():
    scores = list(getTopScores())
    print(scores)
    print("IM HERE")
    return jsonify(scores)

@app.route('/api/Addscores', methods=['POST'])
def add_score():
    print(f'Username JJJJJJJJJJJJJJJ: {request.json}') 
    score = {"Username": request.json['username'], "Score": request.json['score']}
    addScore(score)
    return "Score added", 201   



if __name__ == '__main__':
    app.run(debug=True)