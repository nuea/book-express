const express = require('express')
const routes = require('./app/router')
const app = express()

app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))
