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

const success = (res, status, data) => {
    res.status(status).json(data)
}

module.exports = {
    Failure,
    NotFound: (error = {}) => failure(404, error),
    Forbidden: (error = {}) => failure(403, error),
    BadRequest: (error = {}) => failure(400, error),
    InternalServiceError: (error = {}) => failure(500, error),
    Success: (res, data = {}) => success(res, 200, data),
    Created: (res, data = {}) => success(res, 201, data)
}