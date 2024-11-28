
# Quiz App
This is a web app with Front-end services on React and Back-end services with Flask and MongoDB as database.
 
## General Overview

The quizz app just as mention before is a web app with react on the Front-end and Flask with the Back-end. It is designed so people can take a quizz that can only be accessed if an user was created and registered before, this user is stored in a non-relational database, such as mongo. The questions of the quizz are stored in MongoDB as well.
When entering the quizz app you are asked to login to take the quizz, therefore if you have an account you can access the quizz. The quizz takes random questions from the database and allows the user to view them and select the answers, if it is correct it will be marked in green, if it is incorrect it will mark the chosen answer in red and the correct one in green.
## Diagram

![App Screenshot](https://i.imgur.com/FQHemec.png)


## Patterns Used
To create this Quiz App we use this ones:

- Architectural Patterns:
    - MVC:
        - Model: Being the connection to Mongo to get and post information
        - View: React to display the app
        - Controller: Being the server that does the connection betweern Model and View.

    - SOLID PRINCIPLES:
        - Single Responsibility Principle: The class _QuizApp_ only gets information and post information to the database.
        - Open-Closed Principle: The server accepts extensions but cant really get modified.
        - Liskov Substitution Principle: This really does'nt apply
        - Interface Segregation Principle: This does'nt apply
        - Dependency Inversion Principle: This apply for the frontend side since high level modules dont depend on low-level modules.
    - OOP Principles:
        - Encapsulation: It encapsulates its atrributes and adds security. 
        - Inheritance: Does'nt apply.
        - Polymorphism: Does'nt apply.
        - Abstraction: Does'nt apply.
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

## Deploying on EC2 and Atlas 
For running our app we decided to host 2 EC2 since we had problems with multiple port listening.

1. Firstly Create your aws EC2 instance and install nodejs, python and pip.
2. Create your security rules that enable the ports 8080 and 3000 from anywhere
3. Secondly Run both client and server codes 
4. Add the ip address of the server to AtlasDB 

Examples:
- AWS EC2 Instance:
    -  OS: Amazon Linux
    -  Instance type: t2.medium

![Instances](https://i.imgur.com/96wqGJp.png)

- Security Group:
    -  Ports: 8080, 3000
    -  Protocol: TCP
    -  Origin: Anywhere

![Security Group](https://i.imgur.com/19X6uu3.png)

- Atlas adding IP

![Adding IP to Atlas](https://i.imgur.com/MDgSBiV.png)

- Running code on bash 
![EC2 Server](https://i.imgur.com/2vOIsLb.png)
![EC2 Client](https://i.imgur.com/lrcRkNT.png)

## Example of it running
[Video of Quiz App running](https://youtu.be/etqSkHOuSJ0)

## Authors

- [@Lunaespindola](https://github.com/lunaespindola)
- [@Paulina Alva](https://github.com/A01750624)
- [@Jorge Penagos](https://github.com/A01378450)
- [@Naomi](https://github.com/anciola)

