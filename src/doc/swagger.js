const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');


const document = (directory='**') => swaggerJSDoc({
  swaggerDefinition: {
    info: {
      title: 'Book REST API',
      version: '1.0.0',
      description: 'REST API using NodeJS (Express framework) & MongoDB',
    },
    host: 'localhost:9000',
    basePath: '/',
    schemes: [ 'http' ]
  }, 
  apis: ['./src/doc/*.yaml', `./src/doc/${directory}/*.yaml`]
});

router.use('/swagger', 
  swaggerUi.serve,
  swaggerUi.setup(document())
);



module.exports = router;