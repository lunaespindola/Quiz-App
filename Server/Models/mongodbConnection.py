# Final Project: Quiz Application with Microservices
# Date: 30/05/2023
# Authors:
#          A01750624 Paulina Guadalupe Alva Martinez
#          A01751117 Carlos Alan Gallegos Espinola
#          A01378450 Jorge Alberto Penagos Mendez
#          A01750363 Naomi Anciola Calderon 

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

class QuizApp:
    def __init__(self):
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
        filter = {'id': question_id}
        project = {'_id': 0}
        return self.q_collection.find_one(filter, project)

    def createUser(self, user):
        return self.u_collection.insert_one(user)

    def verifyUser(self, user):
        filter = {'Username': user}
        project = {'_id': 0}
        return self.u_collection.find_one(filter, project)

    def getTopScores(self):
        return self.s_collection.aggregate([{'$sort': {'Score': -1}}, {'$project': {'_id': 0}}, {'$limit': 10}])

    def addScore(self, score):
        return self.s_collection.insert_one(score)
