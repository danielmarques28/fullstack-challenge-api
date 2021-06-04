# Fullstack Challenge API

## React Native App

- [https://github.com/danielmarques28/fullstack-challenge](https://github.com/danielmarques28/fullstack-challenge)

## How to run

* Clone this repo in your machine

* **With Docker**

  * Build back-end in the terminal:

        $ docker-compose build

  * Run back-end in one terminal:

        $ docker-compose up

  * Run migrations in another terminal:

        $ docker-compose exec api yarn typeorm migration:run


* Wait until see this message in the terminal:

      api_1  | listening at http://localhost:3000

## Endpoints

### Create a book:

* Endpoint:

      http:/localhost:3000/api/books

* Method:

      POST

* Request body example (JSON):

      {
        "authorId": 1,
        "name": "Beginning Node.js",
        "description": "This book explains everything for you from a beginner level, enabling you to start using Node.js in your projects right away."
      }

### Get book:

* Endpoint:

      http:/localhost:3000/api/books/:id

* Method:

      GET

* Request body example (JSON):

      // NO BODY

* Response body example (JSON):

      {
        "id": 1,
        "name": "Beginning Node.js",
        "description": "This book explains everything for you from a beginner level, enabling you to start using Node.js in your projects right away.",
        "author": {
          "id": 1,
          "name": "Barasat Syed",
        }
      }

### List books:

* Endpoint:

      http:/localhost:3000/api/books?page=<number>&limit=<number>&search=<string>
      // This queries are optional

* Method:

      GET

* Request body example (JSON):

      // NO BODY

* Response body example (JSON):

      [
        [
          {
            "id": 1,
            "name": "Beginning Node.js",
            "description": "This book explains everything for you from a beginner level, enabling you to start using Node.js in your projects right away.",
            "author": {
              "id": 1,
              "name": "Barasat Syed"
            }
          },
          {
            "id": 2,
            "name": "Beginning Node.js 2.0",
            "description": "This book explains everything for you from a beginner level, enabling you to start using Node.js in your projects right away.",
            "author": {
              "id": 1,
              "name": "Barasat Syed"
            }
          }
        ],
        2
      ]

### List authors:

* Endpoint:

      http:/localhost:3000/api/authors

* Method:

      GET

* Request body example (JSON):

      // NO BODY

* Response body example (JSON):

      [
        {
          "id": 1,
          "name": "Barasat Syed"
        }
      ]

### Create a author:

* Endpoint:

      http:/localhost:3000/api/authors

* Method:

      POST

* Request body example (JSON):

      {
        "name": "Barasat Syed"
      }
