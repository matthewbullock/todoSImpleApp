const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      port = 3000;

const todoController = require('./controllers/todoController')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.set('view engine' , 'ejs');

todoController(app)

app.listen(port , () => {
    console.log(`The application is running on localhost:${port}`)
});
