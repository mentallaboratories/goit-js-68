var express = require('express');
var app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('<h1>hello world</h1');
});

const users = [
    {name:'John Doe', pass:'password', mail:'johndoe@somemail.domain'},
    {name:'Jane Doe', pass:'password', mail:'johndoe@somemail.domain'}
]

app.get('/users', (req, res) => {
    res.json(users);
  });

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})