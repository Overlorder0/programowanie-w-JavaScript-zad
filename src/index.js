const cors = require('cors');
const http = require('http');
const express = require('express');
const apiAuthRouter = require('./controllers/api-auth.controller');
const apiToDosRouter = require('./controllers/api-todos.controller');
const apiUserRouter = require('./controllers/api-user.controller');
const { initDB } = require('./dataBase');
const { notFound, errorHandler} = require('./middlewares/middlewares');


const app = express();


initDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log('URL = ', req.url);
  console.log('Original_URL = ', req.originalUrl);
  console.log('METHOD = ', req.method);
  console.log('HOST = ', req.headers.host);
  console.log('IsSecure = ', req.secure);
  console.log('BODY', req.body);
  console.log('QUERY', req.query);

  next();
});

app.use('/api/auth', apiAuthRouter);
app.use('/api/todo', apiToDosRouter);
app.use('/api/users', apiUserRouter);

app.use(notFound);
app.use(errorHandler);

//Translate port to eng letters for fun ;)
http.createServer(app).listen(3167, () => {
  console.log('Server is working on port 3167');
});