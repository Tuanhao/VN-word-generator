const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    addWords
} = require('./APIs/todos')


app.post('/addWords', addWords)
app.get('/todos', getAllTodos)
exports.api = functions.https.onRequest(app)