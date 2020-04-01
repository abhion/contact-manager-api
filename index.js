const express = require('express');
const port = 3035;
const setupDB = require('./config/database');
const router = require('./config/routes');

const app = express();

app.use(express.json());
app.use('/', router);

setupDB();

app.listen(port, function(){
    console.log('runing on port ', port);
})