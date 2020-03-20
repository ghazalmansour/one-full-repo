const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3003; //heroku step1 

var redis = require("redis"),
    client = redis.createClient()//); //heroku step 2 

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/homes', async (req, res) => {

    const homes = await getAsync('zillow');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(homes)
})
// heroku step3 
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('mi-home/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'mi-home','build','index.html'));
    }); 
} 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))