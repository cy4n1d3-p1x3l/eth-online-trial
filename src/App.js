import React, { useEffect , useState } from 'react';
import './App.css';
import axios from './constant/axios';
import { ethereumAddress } from './constant/ethereumAddress';
function App() {
const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchdata = async () =>{
        const data = await axios.get(`/prices/current/${ethereumAddress}?start=1664364537&span=10&period=22w&searchWidth=600`).then()
        JSON.stringify(data);
        setData(data.data.coins[`${ethereumAddress}`]);
      };
      fetchdata();
    }, []);
    console.log(data);
  return (
    <main>
      {data?(
        <div>
          {data.price}
          <b>
          {data.symbol}
          </b>
        </div>
      ):(
      <h1>loading</h1>
      )}
    </main>

    
  );
}

export default App;
