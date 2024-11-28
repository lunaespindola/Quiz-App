# Final Project: Quiz Application with Microservices
# Date: 30/05/2023
# Authors:
#          A01750624 Paulina Guadalupe Alva Martinez
#          A01751117 Luna Abril Gallegos Espinola
#          A01378450 Jorge Alberto Penagos Mendez
#          A01750363 Naomi Anciola Calderon 

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

class QuizApp:
    def __init__(self):
        """Constructor that initializes the connection to the database
        and the collections that will be used in the application

        Args:
            self (QuizApp): The instance of the class

        Returns:
            None
        """
        current_directory = os.path.dirname(__file__)
        parent_directory = os.path.dirname(current_directory)
        file_path = os.path.join(parent_directory)
        subdirectory = "files"
        file_name = "client.pem"
        subdirectory_path = os.path.join(file_path, subdirectory)
        self.file_path = os.path.join(subdirectory_path, file_name)

        self.__uri = "mongodb+srv://cluster0.ck46bis.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
        self.__client = MongoClient(self.__uri,
                                    tls=True,
                                    tlsCertificateKeyFile=self.file_path,
                                    server_api=ServerApi('1'))

        self.db = self.__client['Quiz-App']
        self.q_collection = self.db['Questions']
        self.u_collection = self.db['Users']
        self.s_collection = self.db['Scores']

    def getQuestion(self, question_id):
        """ Method that returns a question from the database

        Args:
            self (QuizApp): The instance of the class
            question_id (int): The id of the question to be returned

        Returns:
            dict: The question that matches the id
        """
        filter = {'id': question_id}
        project = {'_id': 0}
        return self.q_collection.find_one(filter, project)

    def createUser(self, user):
        """ Method that creates a new user in the database

        Args:
            self (QuizApp): The instance of the class
            user (dict): The user to be created

        Returns:
            dict: The user that was created
        """
        return self.u_collection.insert_one(user)

    def verifyUser(self, user):
        """ Method that verifies if a user exists in the database

        Args:
            self (QuizApp): The instance of the class
            user (dict): The user to be verified

        Returns:
            dict: The user that was verified
        """
        filter = {'Username': user}
        project = {'_id': 0}
        return self.u_collection.find_one(filter, project)

    def getTopScores(self):
        """ Method that returns the top 10 scores from the database

        Args:
            self (QuizApp): The instance of the class

        Returns:
            dict: The top 10 scores
        """
        return self.s_collection.aggregate([{'$sort': {'Score': -1}}, {'$project': {'_id': 0}}, {'$limit': 10}])

    def addScore(self, score):
        """ Method that adds a score to the database

        Args:
            self (QuizApp): The instance of the class
            score (dict): The score to be added

        Returns:
            dict: The score that was added
        """
        return self.s_collection.insert_one(score)
