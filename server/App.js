require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const loanRouter = require('./api/loan/loan.router');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/api/loan', loanRouter);


app.listen(8080, () => {
    // console.clear();
});
