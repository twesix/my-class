const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'

const getDB = async function()
{
    return (await MongoClient.connect(url)).db('my-class')
}

module.exports.getDB = getDB

;(async function()
{
    $db = await getDB()
    // console.log($db)
    const res = await $db.collection('test').insertOne({date: new Date()})
})()
