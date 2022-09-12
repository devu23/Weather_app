import React from 'react'
import { useState,useEffect } from 'react';

 const Myweather = ({tempInfo}) => {

    const [weatherState,setWeatherState] = useState("");

const {
    humidity,
    temp,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset 
} = tempInfo;

// console.log(weathermood);;



//* converting  the seconds into favourable time

let sec = sunset;
let date = new Date(sec *1000);

let timestr = `${date.getHours()}:${date.getMinutes()}`;



useEffect(() => {
  if(weathermood){
    switch (weathermood) {
        case "Clouds":
        setWeatherState("wi-day-cloudy")    
            break;
        case "Clear":
        setWeatherState("wi-day-cloudy-high")    
            break;
        case "Humidity":
        setWeatherState(" wi-humidity")    
            break;
        case "Sunset":
        setWeatherState(" wi-sunset")    
            break;
        case "Haze":
        setWeatherState("wi-day-haze")    
            break;
        case "Rain":
        setWeatherState("wi-rain")    
            break;
    
        default:
            setWeatherState(<i className="wi-day-cloudy-high"></i>) 
            break;
    }
  }
}, [weathermood])


  return (
    <>



<article className="widget">
        <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
        </div>



        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>

          </div>


          <div className="description">
            <div className="weatherCondition">
              {weathermood}
            </div>
            <div className="place">{name},{country}</div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>




         <div className="extra-temp">
          <div className="temp-info-minmax">

            <div className="two-sided-section">

              <p>
                <i className="wi wi-sunset"></i>
              </p>

              <p className="extra-info-leftside">
              {timestr} <br />
                Sunset
              </p>
            </div>



            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>

              <p className="extra-info-leftside">
                {humidity}  <br />
                Humidity
              </p>
            </div>

         



          </div>



          <div className="weather-extra-info">
            
          <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>

              <p className="extra-info-leftside">
                {speed}  <br />
                speed
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>

              <p className="extra-info-leftside">
                {pressure}  <br />
                pressure
              </p>
            </div>
           
          </div>
        </div>

      </article>
    </>
  )
}

export default Myweather;