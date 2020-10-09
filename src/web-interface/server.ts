/*import express from 'express';
import * as questions from './questions';
import mongoose from 'mongoose';
import { Scores } from "../entity/Scores";
import { Questions } from "../entity/Questions"

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://uquizzdb:5678@mongo/quizz', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/static/files', express.static('static'));


let q = new Questions({ theme: "test",
    validated: true,
    question:"ptdr",
    answer: "t ki",
    false_answer: ["pardon ?", "quoi ?"]})
q.save()
/* app.set("views", "./static")
app.set("view engine", "pug")

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post("/questions/add", questions.add)
app.get("/questions", questions.web_interface)
app.get("/questions.js", questions.serve_js)
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
*/





/**
 * 
 *  @title : server.ts
 *  @brief : routes & server config file
 * 
 */
import express from 'express';

// Import controller files
var questionC = require('./Controller/Question');

/**
 * server settings
 */
var app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
app.set("views", "./static/views");
app.set("view engine", "pug");
app.use(express.static('static'));
app.use(express.urlencoded({
    extended: true
}))



/**
 * router
 */
app.get('/question', questionC.displayQPage);
app.post('/question', questionC.formQPage);