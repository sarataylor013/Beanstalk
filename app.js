var express = require('express');
var app = express();
const port = 8080;
var myUsers = ['Tom', 'Nick', 'Harry'];

app.get('/listUsers', function(req, res){
    res.send(myUsers);
})

app.put('/addUser', function(req, res){
    myUsers.push(req.query.name);
    res.send(myUsers);
})

app.delete('/deleteUser', function(req, res){
    myUsers.splice(req.query.start, req.query.deleteCount);
    res.send(myUsers);
})

app.post('/updateUser', function(req, res){
    myUsers[req.query.index]=req.query.name;
    res.send(myUsers);
})

app.listen(port, () => {
    console.log("API running at http://localhost/"+port);
})