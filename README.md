# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] clone this repository.
- [ ] **CD into the folder** where you cloned the repo.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step:

| Not using REST                               | Using REST                                           |
| -------------------------------------------- | ---------------------------------------------------- |
| POST `http://localhost:9000/listAllAdopters` | GET    `http://localhost:9000/api/adopters`          |
| POST `http://localhost:9000/createAdopter`   | POST   `http://localhost:9000/api/adopters`          |
| POST `http://localhost:9000/updateAdopter`   | PUT    `http://localhost:9000/api/adopters/:id`      |
| POST `http://localhost:9000/deleteAdopter`   | DELETE `http://localhost:9000/api/adopters/:id`      |
| POST `http://localhost:9000/listAdopterDogs` | GET    `http://localhost:9000/api/adopters/:id/dogs` |
