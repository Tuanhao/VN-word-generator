const functions = require('firebase-functions');
const app = require('express')();

const {
    getWords,
    addWords
} = require('./APIs/todos')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://vn-word-generator.web.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/addWords', addWords)
app.post('/getWords', getWords)
exports.api = functions.https.onRequest(app)