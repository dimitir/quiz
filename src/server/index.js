const express = require('express');
const db = require('./db');

const app = express();

app.get('/api/getquiz',
    (req, res) => {
        res.send({ quizRes: db.quizList })
    }

);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));``