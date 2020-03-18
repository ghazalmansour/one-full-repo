const express = require('express')
const app = express()
const port = 3003

var redis = require("redis"),
    client = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/homes', async (req, res) => {

    const homes = await getAsync('zillow');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(homes)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))