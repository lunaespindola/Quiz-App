
# Quiz App
This is a web app with Front-end services on React and Back-end services with Flask and MongoDB as database.
 
## General Overview
The quizz app just as mention before is a web app with react on the Front-end and Flask with the Back-end. It is designed so people can take a quizz that can only be accessed if an user was created and registered before, this user is stored in a non-relational database, such as mongo. The questions of the quizz are stored in MongoDB as well.
When entering the quizz app you are asked to login to take the quizz, therefore if you have an account you can access the quizz. The quizz takes random questions from the database and allows the user to view them and select the answers, if it is correct it will be marked in green, if it is incorrect it will mark the chosen answer in red and the correct one in green.

## Deployment

To deploy this project firstly run on ./client

```bash
  npm install  
```
Then 

```bash
  npm start 
```

After running the client side of the app, on another CLI run on ./server

```bash
  python server.py
```



## API Reference

#### Get Questions

```http
  POST /api/getQuestions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `numQuestions` | `number` | **Required**. Number of question to send from db  |

#### Post information to DB

```http
  POST /api/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. Username to store on DB and show on Scores if it scores on top 10 |
| `numQuestions` | `number` | **Required**. Number of question to store on user history on db|


#### Get Top 10 scores

```http
  GET /api/scores
```

#### Post scores to db

```http
  POST /api/Addscores
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required**. Username to store on DB and show on Scores if it scores on top 10 |
| `score` | `number` | **Required**. Number Scored on the quiz|

## Authors

- [@AlanGallegosEsp](https://github.com/AlanGallegosEsp)
- [@Paulina Alva](https://github.com/A01750624)
- [@Jorge Penagos](https://github.com/A01378450)
- [@Naomi](https://github.com/anciola)


## Diagram

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

