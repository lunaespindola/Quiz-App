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

def getQuestion(question_id):
    filter={'id': question_id}
    project={'_id': 0}
    return q_collection.find_one(filter, project)

def createUser(user):
    return u_collection.insert_one(user)