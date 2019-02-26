const express = require('express')
const path = require('path')
const fs = require('fs')
const db = require('./db')
const bodyParser = require('body-parser')
const port = 4000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/', function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.body)
    res.json(req.body)
})

app.listen(port, function()
{
    console.log(`app online: http://localhost:${port}`)
})