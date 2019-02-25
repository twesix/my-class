const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/my_class'

const getConnection = async function()
{
    const $db = await MongoClient.connect(url)
    return $db.student_info
}

module.exports.getConnection = getConnection

(async function()
{
    $db = await getConnection()
})()
