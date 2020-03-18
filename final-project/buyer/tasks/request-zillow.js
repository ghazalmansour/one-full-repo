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

  //filtering to < $1000000
  const lessHomes = homes.filter(home => {
    //return home.price > 1000000;
  //});
  if (
    home.price > 1000000
  ) {
    return false 
  }
  return true 
}); 
      /*const homePrice = home.price.toString().toLowerCase();
      // algo logic
      if (
          homePrice.home > 1000000
      ); {
          return false
      }
      return true;
  })*/

  console.log('filtered down to', lessHomes.length);

  // redis 
  const success = await setAsync('zillow', JSON.stringify(lessHomes));
  console.log({success});
}
module.exports();




/////////////////////////////////////////////////

/*var fetch = require('node-fetch');

var redis = require("redis"),
    client = redis.createClient();

const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://my-json-server.typicode.com/ghazalmansour/mockjson/properties'

async function fetchZillow(){

console.log('fetching zillow')

  let resultCount = 1, onPage = 0;
  const allHomes = [];
  

  while(resultCount > 0){
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const homes = await res.json();
    allHomes.push(...homes);
    resultCount = homes.length;
    console.log('got',resultCount,'homes');
    onPage++;
  }
  console.log('got', allHomes.length, 'homes total');

  const success = await setAsync('zillow', JSON.stringify(allHomes));
  console.log({success});
}
fetchZillow();

module.exports = fetchZillow;*/