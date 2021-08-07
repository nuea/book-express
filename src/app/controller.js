const service = require('./service')
const { Success, Created, Failure } = require('../response')
const controller = {};

controller.createBook = (req, res) => {
    service.createBook(req.body).then(
        result => Created(res, result),
        error => Failure(res, error)
    )
}

controller.getBooks = (req, res) => {
    service.getBooks(req.query).then(
        result => Success(res, result), 
        error => Failure(res, error)
    )
}

// controller.getBookById = (req, res) => {
//     service.getBookById(req.params.id).then(
//         result => Success(res, result), 
//         error => Failure(res, error)
//     )
// }

// controller.updateBook = (req, res) => {
//     service.updateBook(req.params.id, req.body).then(
//         result => response.Success(res, result), 
//         error => response.Failure(res, error))
// }

// controller.deleteBookById = (req, res) => {
//     Book.findByIdAndDelete(req.params.id, (err, book) => {
//         if (err) return  res.json(err)
//         res.json(book)
//     })
// }

module.exports = controller
