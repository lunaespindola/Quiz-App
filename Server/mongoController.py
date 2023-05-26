from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from tkinter.filedialog import askopenfilename

uri = "mongodb+srv://cluster0.ck46bis.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile=askopenfilename(),
                     server_api=ServerApi('1'))

db = client['Quiz-App']
q_collection = db['Questions']
u_collection = db['Users']
s_collection = db['Scores']


def getQuestion(question_id):
    filter = {'id': question_id}
    project = {'_id': 0}
    return q_collection.find_one(filter, project)


def createUser(user):
    return u_collection.insert_one(user)


def verifyUser(user):
    filter = {'Username': user}
    project = {'_id': 0}
    return u_collection.find_one(filter, project)


def getTopScores():
    return s_collection.aggregate([{'$sort': {'Score': -1}}, {'$project': {'_id': 0}}, {'$limit': 5}])