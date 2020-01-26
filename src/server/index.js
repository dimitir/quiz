const express = require('express');
const db = require('./db');

// const quizJson = JSON.stringify(db.quizList);  res.writeHead(200, { 'content-type': 'application/json' })
const app = express();

// app.use(express.static('dist'));
app.get('/api/getquiz',
    (req, res) => {
        res.send({ quizRes: db.quizList })
    }

);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));