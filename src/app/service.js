const {NotFound, BadRequest} = require('../response');
const repository = require('./repository');
const service = {};

service.createBook = async query => {
    return await repository.createBook(query)
}

service.getBooks = async query => {
    return await repository.getBooks(query)
}

service.getBookById = async id => {
    const book = await repository.getBookById(id)
    if(book == null) throw NotFound(id);
    return book
}

service.updateBook = async (id, body) => {    
    const book = await service.getBookById(id)
    await repository.updateBook(id, {...book.toObject(), ...body})
    return {...book.toObject(), ...body}
}

service.deleteBookById = async id => {
    const book = await service.getBookById(id)
    await repository.deleteBookById(book.id)
    return book
}

module.exports = service