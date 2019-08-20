require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const users = require('./route/user');


const app = express();
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log('connected to MongoDD'))
    .catch(err => console.log('could not connect to database'))

app.use(express.json());
app.use('/users', users)
app.get('/', (req, res) => {
    res.send('hello World')
})

const port = process.env.PORT || 3005;
app.listen(port, () => console.log('App is running on port ', port))