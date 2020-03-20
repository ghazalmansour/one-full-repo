var fetch = require('node-fetch');
var redis = require("redis"),
    client = redis.createClient(); 

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://my-json-server.typicode.com/ghazalmansour/mockjson/properties'

 module.exports = async function fetchZillow(){
  const res = await fetch(baseURL);
  const homes = await res.json();
  console.log({homes});
  console.log(homes.length);

  // redis 
  const success = await setAsync('zillow', JSON.stringify(homes));
  console.log({success});
}
module.exports();
