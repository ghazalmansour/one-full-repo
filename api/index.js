const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080; //heroku step1 

var redis = require("redis"),
    client = redis.createClient(process.env.REDIS_URL); //heroku step 2 

const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

app.get('/homes', async (req, res) => {

    const homes = await getAsync('zillow');
    res.header("Access-Control-Allow-Origin", 'https://mern-myhome.herokuapp.com/' || "http://localhost:3000");
    return res.send(homes)
})
// heroku step3 
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('mi-home/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname, 'mi-home','build','index.html'));
    }); 
} 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))