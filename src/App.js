import React from "react";
import { useState,useEffect } from "react";
//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=9ade5b6501fa7cf9700ab23e6b889307
import "./App.css"
import Myweather from "./myweather";


function App() {

  const [weatherValue,setWeatherValue] = useState("Pune");
  const [tempInfo,setTempInfo]  = useState({});
  const getWeatherInfo = async ()=> {
try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherValue}&units=metric&appid=9ade5b6501fa7cf9700ab23e6b889307`

    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    const {humidity,temp,pressure}= data.main;
    const {main: weathermood} = data.weather[0];
    const {name} = data
    const {speed} = data.wind;
    const {country,sunset} = data.sys;

    

    const myWeatherInfo={
    humidity,
    temp,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset 
    }

    setTempInfo(myWeatherInfo);
}
catch(err){
  console.log(err);
}
  }


  useEffect(() => {
    getWeatherInfo();
  }, [])
  
  return (

   
    <>


      <div className="wrap">
        <div className="search">
          <input type="search"
            placeholder="search..."
            autoFocus
            id="search"
            value={weatherValue}
            onChange={(event)=> setWeatherValue(event.target.value) }
            className="searchTerm" />

          <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>

      {/* Our Temp Card */}

<Myweather  tempInfo={tempInfo}/>
     


    </>
  );
}

export default App;
