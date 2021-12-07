import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { SeachBar } from "../component/searchBar.jsx";

import "../../styles/forecast.scss";
import { set } from "react-hook-form";

const Forecast = () =>{
    const { store, actions } = useContext(Context);

// Icons
    const  humidity = <img src="https://i.ibb.co/fpTwnrz/carbon-humidity-alt.png" alt="humidity" />
    const  wind = <img src="https://i.ibb.co/FbCXsPQ/fontisto-wind.png" alt="wind" />
    const  humidityDetail = <img src="https://i.ibb.co/GTQqyWb/detalle-carbon-humidity-alt.png" alt="humidity detail" />
    const  windDetail = <img src="https://i.ibb.co/qdbHbGh/detalle-fontisto-wind.png" alt="wind detail" />
    const  maxTemp = <img src="https://i.ibb.co/CwhpBP5/carbon-temperature-max.png" alt="Maximal Temperature" />
    const  minTemp = <img src="https://i.ibb.co/QCP690z/carbon-temperature-min.png" alt="Minimal temperature" />
    const  sunrise = <img src="https://i.ibb.co/Bw8XxwV/mdi-weather-sunset-up.png" alt="sunrise" />
    const  sunset = <img src="https://i.ibb.co/30r3Bpt/Vector.png" alt="Sunset" />
    const  lvlSea = <img src="https://i.ibb.co/FV0kQNz/openmoji-sea-level-rise.png" alt="level of the sea" />
    const sun = <img src="https://i.ibb.co/HVqvqL9/emojione-sun.png" alt="sun" />
    const seachIcon = <i class="fas fa-search"></i>

// Get forecast from city and country

    const APYKEY= "4c9d5d836f80271244b23b473f5783a7"

// Necesary info to GET the place
    const [form, setForm] = useState({
        city:"",
        country:""
    })

    const[myCity,setMyCity] = useState("");

    // INFO in DOM
    const[myCountry, setMyCountry] = useState([]);
    const[myTemperature, setMyTemperature] = useState([]);
    const[myHumidity, setMyHumidity] = useState([]);
    const[myWind, setMyWind] = useState([]);
    const[mySunrise, setMySunrise] = useState([]);
    const[mySunset, setMySunset] = useState([]);
    const[myMaxTemp, setMyMaxTem] = useState([]);
    const[myMinTemp, setMyMinTem] = useState([]);
   

    /* useEffect ( () =>{
            
            setMyWeather([...store.weather]);
            setMyCity(store.weather.name);
            setMyCountry(store.weather.sys.country);
            setMyTemperature(store.weather.main.temp);
            setMyMaxTem(store.weather.main.temp_max);
            setMyMinTem(store.weather.main.temp_min);
            setMyHumidity(store.weather.main.humidity);
            setMyWind()
            setMySunrise();
            setMySunset();
            setMyLvlSea();
            console.log("myweather",myWeather);
        },
        [store.weather]
    ) */
        
        

        const handleChange = (e) =>{
            let name = e.target.name;
            let value = e.target.value;

            if(name == "city"){
                setForm({...form, city:value })
            }
            if(name == "country"){
                setForm({...form, country:value })
            }
            console.log(form.city, form.country)
            console.log(form)
        }

        

    return(
        <div className="forecast-body">
            <div className="forecast-topbody">
                <p>WHERE?</p>
                <div className="forecast-searchBar__Box">
                    <input 
                        type="text" 
                        name="city" 
                        placeholder="City" 
                        className="forecast-seachBar__input" 
                        onChange= {e => handleChange(e)}
                    />
                    <input 
                        type="text" 
                        name="country" 
                        placeholder="Country" 
                        className="forecast-seachBar__input" 
                        onChange= {e => handleChange(e)}
                    />
                    <div className="searchBar-container__button">
                        <button 
                            as="input" 
                            type="submit"
                            value="" 
                            className="forecast-seachBar__button"
                            onClick={ () =>{
                                actions.getWeatherData(form.city,form.country,APYKEY);
                                console.log("SUBMIT",form.city,form.country,APYKEY)
                                /* weatherData_fourdays(e) */
                            }}
                        >{seachIcon}</button>
                    </div>
                </div>
            </div>
            <div className="forecast-forecastbody">
                <div className="forecast-forecastbody__today">
                    <p>4 Days Weather, {myCity}, {myCountry}</p>
                    <div className="forecast-forecastbody__today__primaryDates">
                        <div className="primaryDates__temp">
                            <span>{myTemperature}°</span>
                            {sun}
                        </div>
                        <div className="primaryDates__windHum">
                            <div className="primaryDates__windHum__Humidity">
                                {humidity}
                                <span>{myHumidity}%</span>
                            </div>
                            <div className="primaryDates__winHum__Wind">
                                {wind}
                                <span>WNW 10 mph</span>
                            </div>
                        </div>
                    </div>
                    <div className="forecast-forecastbody__today__secondaryDates">
                        <div className="forecast-forecastbody__today__maxTempRiseLvl">
                            <div>{sunrise} <span>7:42 am</span></div>
                            <div>{maxTemp} <span>{myMaxTemp}°</span></div>
                           {/*  <div>{lvlSea} <span>0.4m</span></div> */}
                        </div>
                        <div className="forecast-forecastbody__today__minTempSet">
                            <div>{sunset} <span>8:52 pm</span></div>
                            <div>{minTemp} <span>{myMinTemp}°</span></div>
                            
                        </div>
                    </div>  
                </div>
                <div className="forecast-forecastbody__nextDays">
                    <div className="forecast-forecastbody__tomorrow">
                        <div className="secondaryDates__firstpart">
                            <span>DATE</span>
                            <span>MAX/MIN</span>
                            {sun}
                            <span>Sunny</span>
                        </div>
                        <div className="secondaryDates__secondPart">
                            {humidityDetail} <span>72%</span>
                            {windDetail} <span>WNW 13 mph</span>
                        </div>
                    </div>
                    <div className="forecast-forecastbody__afterTomorrow">
                        <div className="secondaryDates__firstpart">
                            <span>DATE</span>
                            <span>MAX/MIN</span>
                            {sun}
                            <span>Sunny</span>
                        </div>
                        <div className="secondaryDates__secondPart">
                            {humidityDetail} <span>72%</span>
                            {windDetail} <span>WNW 13 mph</span>
                        </div>
                    </div>
                    <div className="forecast-forecastbody__afterAfterTomorrow">
                        <div className="secondaryDates__firstpart">
                            <span>DATE</span>
                            <span>MAX/MIN</span>
                            {sun}
                            <span>Sunny</span>
                        </div>
                        <div className="secondaryDates__secondPart">
                            {humidityDetail} <span>72%</span>
                            {windDetail} <span>WNW 13 mph</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;