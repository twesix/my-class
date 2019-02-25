const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/my_class'

function getConnection()
{
    return MongoClient.connect(url)
}

module.exports.getConnection = getConnection

