const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
//app.get('/', (req, res) => {
//  res.send('Hello world')
//})
app.post('/', (req, res) => {
    res.send('Hello world')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})