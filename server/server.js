const dotenv = require('dotenv').config();
const PORT= process.env.PORT;

const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(cors());

app.use(bodyParser.json());
app.use( bodyParser.urlencoded({extended:false}));

app.use('/api/todos', routes.todos);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})