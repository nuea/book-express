const service = require('./service')
const response = require('../response')
const controller = {};

controller.createBook = (req, res) => {
    service.createBook(req.body).then(
        result => response.Created(res, result),
        error => response.Failure(res, error)
    )
}

controller.getBooks = (req, res) => {
    service.getBooks(req.query).then(
        result => response.Success(res, result), 
        error => response.Failure(res, error))
}

controller.getBookById = (req, res) => {
    service.getBookById(req.params.id).then(
        result => response.Success(res, result), 
        error => response.Failure(res, error))
}

controller.updateBook = (req, res) => {
    service.updateBook(req.params.id, req.body).then(
        result => response.Success(res, result), 
        error => response.Failure(res, error))
}

// controller.deleteBookById = (req, res) => {
//     Book.findByIdAndDelete(req.params.id, (err, book) => {
//         if (err) return  res.json(err)
//         res.json(book)
//     })
// }

module.exports = controller
