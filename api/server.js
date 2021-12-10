// build your server here and require it from index.js
const express = require('express');
const server = express();


//additional require()'s
const projectsRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

//server.use()'s
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

//api main page and info
server.get('/', (req, res) => {
  res.send(`<h1> Hey code reviewer! </h1>   <br>
  <h2> go to these endpoints for your beautiful data :) </h2>  <br>
  <p>/api/resources</p> <br> <p>/api/projects</p> <br> <p>/api/tasks</p> <br>
  <a href =https://www.youtube.com/watch?v=7VkqerXVtTA>please enjoy reviewing my code with this</a> `);
});


module.exports = server;
