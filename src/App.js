import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [hostname,setHostname]=useState(null);
useEffect(()=>{
  fetch("http://webinar.com/hostname")
  .then(data=>data.json())
  .then(data=>{
    setHostname(data.host_name)
  });
},[])
  return (
    <div className="App">
      <header className="App-header">
          {
            hostname?<h1 style={{fontSize:'100px'}}>{hostname}</h1>:null
          }
      </header>
    </div>
  );
}

export default App;
