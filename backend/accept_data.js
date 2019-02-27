const express = require('express')
const path = require('path')
const fs = require('fs')
const db = require('./db')
const bodyParser = require('body-parser')
const port = 4000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/', async function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.body)
    res.json(req.body)
})

app.get('/get_all_data', async function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const $db = await db.getDB()
    $db.collection('student_submit').find({}).toArray(function(err, docs)
    {
        console.log(docs)
        res.json(docs)
    })
})

app.get('/clear_all_data', async function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const $db = await db.getDB()
    const result = await $db.collection('student_submit').deleteMany({})
    console.log(result.result)
    res.json(result.result)
})

app.listen(port, function()
{
    console.log(`app online: http://localhost:${port}`)
})