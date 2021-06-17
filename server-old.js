const express = require('express')

const app = express()

function m1 (req, res, next){
    console.log('running middleware 1')
    next()
}
function m2 (req, res, next){
    console.log('running middleware 2')
    next()
}
function m3 (req, res, next){
    console.log('running middleware 3')
    next()
}
function m4 (req, res, next){
    console.log('running middleware 4')
    next()
}
function m5 (req, res, next){
    console.log('running middleware 5')
    next()  //used to go to next middleware
}

app.get('/hello', m3 ,m2, (req, res) => {
    res.send('Hello World')
})

app.listen(4343, () => {
    console.log('server started on http://localhost:4343')
})