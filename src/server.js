const express = require('express')
const Book = require('./book')
const app = express()

app.use(express.json())

app.post('/books', (req, res) => {
    var book = new Book (req.body)
    book.save((err, book) => {
        if (err) return  res.json(err)
        res.json(book)
    })
})

app.get('/books', (req, res) => {
    Book.find((err, books) => {
        if (err) return  res.json(err)
        res.json(books)
    });
})

app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) return  res.json(err)
        res.json(book)
    })
})

app.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) return  res.json(err)
        res.json(book)
    })
})

app.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
        if (err) return  res.json(err)
        res.json(book)
    })
})

app.listen(9000, () => console.log('Start server in port: 9000'))
