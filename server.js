// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Welcome to the leage of Draven!!</h1> \n');
});


app.listen(8080, () => {
    console.log('Server is up on 8080')
})