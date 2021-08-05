const express = require('express')
const app = express()

app.use(express.json())
const books = [] 

app.post('/books', (req, res) => {
    books.push(req.body)
    res.json(req.body)
})

app.get('/books', (req, res) => {
    res.json(books)
})

app.get('/books/:id', (req, res) => {
    var id = req.params.id
    res.json('get by id ' + id)
})

app.put('/books/:id', (req, res) => {
    var id = req.params.id
    res.json({
        id,
        ...req.body
    })
})

app.delete('/books/:id', (req, res) => {
    var id = req.params.id
    res.json({
        id
    })
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.listen(9000, () => console.log('Start server in port: 9000'))
