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
    """ Method that returns a list of questions from the database

    Args:
        self (QuizApp): The instance of the class
        numQuestions (int): The number of questions to be returned

    Returns:
        list: The list of questions that match the ids
    """
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
    """ Method that creates a new user in the database
    
    Args:
        self (QuizApp): The instance of the class
        user (dict): The user to be created
        
        Returns:
            str: The message that indicates if the user was created or not        
    """
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
    """ Method that returns a list of the top 10 scores from the database

    Args:
        self (QuizApp): The instance of the class

    Returns:
        list: The list of top 10 scores
    """
    scores = list(quiz_app.getTopScores())
    return jsonify(scores)

@app.route('/api/Addscores', methods=['POST'])
def add_score():
    """ Method that adds a new score to the database

    Args:
        self (QuizApp): The instance of the class
        score (dict): The score to be added

    Returns:
        str: The message that indicates if the score was added or not
    """
    score = {"Username": request.json['username'], "Score": request.json['score']}
    quiz_app.addScore(score)
    return "Score added", 201

if __name__ == '__main__':
    app.run(debug=True, port=8080, host='0.0.0.0')