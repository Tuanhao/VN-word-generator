const functions = require('firebase-functions');
const app = require('express')();

const {
    getWords,
    addWords
} = require('./APIs/todos')


app.post('/addWords', addWords)
app.post('/getWords', getWords)
exports.api = functions.https.onRequest(app)