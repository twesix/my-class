const express = require('express')
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const dest  =path.resolve(__dirname, '../pages/img')
const upload= multer({dest: dest})
const db = require('./db')


const port = 3000

const app = express()


app.get('/student_submit', async function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const query = req.query
    query.date = (new Date()).toLocaleString('zh-CN')
    console.log(query)

    if(!query.id || !query.seat || !query.phone || !query.knowledge_point
        || !query.emotion || !query.Number || !query.question)
    {
        res.json({ok: false, err: '参数不全'})
        return
    }
    const $db = await db.getDB()
    try
    {
        await $db.collection('student_submit').insertOne(query)
        res.json({ok: true})
    }
    catch(e)
    {
        console.log(e)
        res.json({ok: false, err: e.message})
    }
})

app.get('/check_id',async function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')

    const id = req.query.id
    const $db = await db.getDB()
    try
    {
        const result = await $db.collection('student_profile').findOne({student_id: parseInt(id)})
        console.log(id)
        console.log(result)
        if(result === null)
        {
            res.json({ok: false})
        }
        else
        {
            res.json({ok: true})
        }
    }
    catch(e)
    {
        console.log(e)
        res.json({ok: false})
    }
})

app.get('/set_homepage', function(req, res)
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.query)
    fs.writeFileSync(path.resolve(__dirname, '../pages/data/homepage.json'), JSON.stringify(req.query))
    res.json({ok: true})
})

app.post('/upload_question_image', upload.single('question_image'), function(req, res, next)
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    console.log(req.file)
    const originalName = req.file.originalname
    let nameArr = originalName.split('.')
    const fileType = nameArr.pop()
    const saveName = 'question.' + fileType
    fs.renameSync(path.resolve(dest, req.file.filename), path.resolve(dest, saveName))
    res.json({ok: true})
})

app.get('/change_question_options', function(req, res)
{
    console.log(req.query)
    fs.writeFileSync(path.resolve(__dirname, '../pages/data/question_options.json'), JSON.stringify(req.query))
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({ok: true})
})

app.use('/', express.static(path.resolve(__dirname, '../', 'pages')))

app.listen(port, function()
{
    console.log(`app online: http://localhost:${port}`)
})