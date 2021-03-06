const {InternalServerError} = require('../response')
const Book = require('./book.model')
const repository = {};

repository.createBook = async data => {
    const book = new Book (data)
    return await book.save().catch(err => {
        throw InternalServerError(err)
    })
}

repository.getBooks = async query => {
    return await Book.find(query).catch(err => {
        throw InternalServerError(err)
    })
}

repository.getBookById = async id => {
    return await Book.findById({_id: id}).catch(err => {
        throw InternalServerError(err)
    })
}

repository.updateBook = async (id, data) => {
    return await Book.updateOne({_id: id}, data).catch(err => {
        throw InternalServerError(err)
    })
}

repository.deleteBookById = async id => {
    return await Book.findByIdAndDelete(id).catch(err => {
        throw InternalServerError(err)
    })
}

module.exports = repository