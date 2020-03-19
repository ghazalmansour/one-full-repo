import React from 'react';
import './App.css';

import Homes from './Homes';

const HOME_API_URL = 'http://localhost:3003/homes';


async function fetchHomes(updateHm) {
  const res = await fetch(HOME_API_URL);
  let json = await res.json();
  
  updateHm(json);
}


function App() {

const [homeList, updateHomes] = React.useState([]);

 React.useEffect(() => {
    fetchHomes(updateHomes);
  }, [])

  return (
    <div className="App">
      <Homes homes={homeList} />
    </div>
  );
}



export default App;
