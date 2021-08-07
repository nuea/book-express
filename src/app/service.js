const repository = require('./repository');
const service = {};

service.createBook = async query => {
    return await repository.createBook(query)
}

service.getBooks = async query => {
    return await repository.getBooks(query)
}

service.getBookById = async id => {
    return await repository.getBookById(id)
}

service.updateBook = async(id, body) => {
    return await repository.updateBook(id, body)
}

module.exports = service