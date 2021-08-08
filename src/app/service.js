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
    const rs = await repository.updateBook(id, {...book.toObject(), ...body})
    console.log(rs)
    if(rs.ok == 1) return await service.getBookById(id)
    
}

service.deleteBookById = async id => {
    const book = await service.getBookById(id)
    await repository.deleteBookById(book.id)
}

module.exports = service