const { BadRequest, NotFound } = require('../response');
const repository = require('./repository');
const service = {};

service.createBook = async query => {
    return await repository.createBook(query)
}

service.getBooks = async query => {
    return await repository.getBooks(query)
}

// service.getBookById = async id => {
//     // const book = await repository.getBookById(id)
//     // console.log(book)
//     // if(book == null) return NotFound(err);
//     // return book.toObject();
//     try {
//         const todo = await todoRepository.getBookById(id);
//         if(todo == null) throw NotFound(err);
//         return todo.toObject();
//     } catch(err) { throw BadRequest(err)}
// }

// service.updateBook = async (id, body) => {    
//     try{
//         const book = service.getBookById(id)
//     // return await repository.updateBook(id, body)
//     //     if(err) throw BadRequest(err);
//     //     return await service.getBookById(id)
//     }catch(err) { throw BadRequest(err)}
// }

module.exports = service