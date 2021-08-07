class Failure {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }    
}
  
const failure = (status, error) => {
    if ( error instanceof Failure ) return error
    return new Failure(status, error)
}

const response = (res, status, data ) => res.status(status).json(data);

module.exports = {
    Success: (res, data = {}) => res.status(200).json(data),
    Created: (res, data = {}) => res.status(201).json(data),
    Failure: (res, err) => {
        console.log(err);
        if (err instanceof Failure) response(res, err.code, err.error);
        else if( err ) response(res, 400, {status: '400', message: 'Bad Request'})
        else response(res, 501);
    },
    NotFound: (error = {}) => failure(404, {id: error}),
    BadRequest: (error = {}) => failure(400, error),
    InternalServiceError: (error = {}) => failure(500, error),
}