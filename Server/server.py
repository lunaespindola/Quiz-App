# Final Project: Quiz Application with Microservices
# Date: 30/05/2023
# Authors:
#          A01750624 Paulina Guadalupe Alva Martinez
#          A01751117 Carlos Alan Gallegos Espinola
#          A01378450 Jorge Alberto Penagos Mendez
#          A01750363 Naomi Anciola Calderon 

from flask import Flask
from flask_cors import CORS
from flask import request
from flask import jsonify
from datetime import datetime
import random
from Models.mongodbConnection import QuizApp

app = Flask(__name__)
CORS(app)

# Create an instance of the QuizApp class
quiz_app = QuizApp()

@app.route('/api/getQuestions', methods=['POST'])
def getQuestions():
    numQuestions = int(request.json['numQuestions'])
    randomList = random.sample(range(1, 26), numQuestions)
    questions = []
    if numQuestions == 1:
        questions.append(quiz_app.getQuestion(1))
        return jsonify(questions)
    else:
        for i in randomList:
            questions.append(quiz_app.getQuestion(i))
        return jsonify(questions)

@app.route('/api/users', methods=['POST'])
def create_user():
    user = {"Username": request.json['username'], "Number_of_questions": request.json['numQuestions'],
            "Time": datetime.now()}
    res = quiz_app.verifyUser(user["Username"])
    if res is None:
        quiz_app.createUser(user)
        return "User created", 201
    else:
        return "User already exists"

@app.route('/api/scores', methods=['GET'])
def get_scores():
    scores = list(quiz_app.getTopScores())
    return jsonify(scores)

@app.route('/api/Addscores', methods=['POST'])
def add_score():
    score = {"Username": request.json['username'], "Score": request.json['score']}
    quiz_app.addScore(score)
    return "Score added", 201

if __name__ == '__main__':
    app.run(debug=True, port=8080)