const express = require('express');
const cors = require('cors');

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  try {
    res.send({message: 'test app'})
  } catch (e) {
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})