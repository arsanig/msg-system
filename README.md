# Qlik Audition Project

Hi :wave: ! This is a simple single page web application (SPA) that allows you to post messages, check if they're palindromes, and delete the messages. I've only ever made a fullstack application once before this so it was a fun learning experience.

The stack I'm using is known as a MEVN or VENoM stack (Mongo, Express.js, Vue.js, Node.js).

I chose to make a SPA due to the simplicity of the application. SPAs serve all the static files first and only make JSON responses from the server. All this allows for a faster and more responsive experience.

## Architecture

A simple archecture diagram of the app [here](https://imgur.com/a/YOKvw25).

## Requirements

* docker
* docker-compose

## Steps to run project

### Starting the project application

1. Clone the repo onto your computer
2. Open a terminal/console window and change your directory to the project's folder
3. Run `docker-compose build`
4. When finished run `docker-compose up`
6. In a browser open `http://localhost:8080/messages` and the app will be running

## API Endpoints

### GET `/`
This endpoint serves a non-functional login homepage.

### GET  `/messages`
Retrieves and lists all the messages in the database. An example response:
```
{
    "messages": [
        {
            "_id": 1,
            "message": "race car"
        },
        {
            "_id": 2,
            "message": "Not a palindrome!"
        }
    ]
}
```

### POST  `/messages`
Creates a message. It accepts a JSON in the body of the request. An example of a valid request body:
```
{
	"message":"race car"
}
```

### DELETE `/messages/:id`
Deletes a message. Accepts a JSON object in the body of the request. An example of a valid request body:
```
{
	"_id": 1,
    "message": "race car"
}
```