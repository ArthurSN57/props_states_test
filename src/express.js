const express = require('express')
const app = express()
const port = 3001

const cors = require('cors');
app.options('*', cors());
app.options('Origin, X-Requested-With, Content-Type, Accept', cors());
app.use(cors());

app.get('/people', (req, res) => {
  res.send([
    {
      "nome": "Arthur",
      "country": "Brasil",
      "company": "Mobicity"
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})