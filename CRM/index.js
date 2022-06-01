const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/login.html")
})

app.get('/home', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

// listados
app.get('/costumers', function(req, res) {
    res.sendFile(__dirname + "/views/costumers.html")
})
app.get('/users', function(req, res) {
    res.sendFile(__dirname + "/views/users.html")
})
app.get('/iteractions', function(req, res) {
    res.sendFile(__dirname + "/views/iteractions.html")
})

// maestros
app.get('/vcostumer', function(req, res) {
    res.sendFile(__dirname + "/views/vcostumer.html")
})
app.get('/vuser', function(req, res) {
    res.sendFile(__dirname + "/views/vuser.html")
})
app.get('/viteraction', function(req, res) {
    res.sendFile(__dirname + "/views/viteraction.html")
})

app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3000")