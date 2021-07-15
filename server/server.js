require('dotenv').config();

const express = require('express');
const path = require('path')
// const emailCtrl = require('./emailController');

const app = express();

const {SERVER_PORT} = process.env;
// const {SERVER_PORT, SERVICE_ID, TEMPLATE_ID, USER_ID} = process.env;
// console.log(SERVER_PORT, SERVICE_ID, TEMPLATE_ID, USER_ID)
app.use(express.json());

// endpoints
// app.get('/contact', emailCtrl.getEnv);
app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))