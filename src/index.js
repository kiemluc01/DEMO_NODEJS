const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 1611

app.use(morgan('combined'))

app.get('/', (req, res) => res.send('<h1>Nguyễn Kiêm Lực</h1>'))

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})