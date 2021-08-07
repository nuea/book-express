const response = require('../response')
const Book = require('./book')
const repository = {};

repository.createBook = async data => {
    const book = new Book (data)
    return await book.save().catch(err => {
        throw response.InternalServiceError(err)
    })
}

repository.getBooks = async query => {
    return await Book.find(query).catch(err => {
        throw response.InternalServiceError(err)
    })
}

repository.getBookById = async id => {
    return await Book.findById({_id: id}).catch(err => {
        throw response.InternalServiceError(err)
    })
}

repository.updateBook = async id => {
    return await Book.updateOne({_id: req.params.id}, req.body, (err, ok) => {
        if (err) return  res.json(err)
        res.status(200).json({})
    })
}

module.exports = repository