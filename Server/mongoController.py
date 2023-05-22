from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from tkinter.filedialog import askopenfilename

uri = "mongodb+srv://cluster0.ck46bis.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile=askopenfilename(),
                     server_api=ServerApi('1'))

db = client['Quiz-App']
collection = db['Questions']
doc_count = collection.count_documents({})
doc = collection.find_one({"id": 1})


def getQuestion(question_id):
    return collection.find_one({"id": question_id})