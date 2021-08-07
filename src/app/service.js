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

service.updateBook = async() => {
    return await repository.updateBook(id)
}

module.exports = service