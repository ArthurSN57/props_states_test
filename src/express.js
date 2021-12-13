const express = require('express')
const app = express()
const port = 3001

var bodyParser = require('body-parser');

const cors = require('cors');
app.options('*', cors());
app.options('Origin, X-Requested-With, Content-Type, Accept', cors());
app.use(cors());

//Handle json data
app.use(bodyParser.json({ limit:'15mb' }));

//Handle x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: true, limit:'15mb', parameterLimit:50000 }));

app.get('/people', (req, res) => {
  res.send([
    {
      "name": "Arthur",
      "country": "Brasil",
      "company": "Mobicity"
    }
  ])
})

app.put('/people', (req, res) => {
  let person = req.body.person;

  person.save(function(err) {
  if (err) {
    return res.send('/people', {
      errors: err.errors,
      person: person
    });
  } else {
    res.jsonp(person);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})