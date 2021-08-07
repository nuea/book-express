const express = require('express')
const routes = require('./app/router')
const swagger = require('./doc/swagger')
const app = express()

app.use(express.json())
app.use(routes)
app.use(swagger)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
