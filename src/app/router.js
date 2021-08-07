const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.post('/books', controller.createBook)
router.get('/books', controller.getBooks)
router.get('/books/:id', controller.getBookById)
router.put('/books/:id', controller.updateBook)
// router.delete('/books/:id', controller.deleteBookById)

module.exports = router