import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/forecast.scss";


const Forecast = () =>{
    const { store, actions } = useContext(Context);
//  Const & UseStates    
    const [form, setForm] = useState({
        city:"",
        country:""
    });
    const[sunrise,setSunrise]= useState("");
    const[sunset,setSunset]= useState("");
    // const tomorrowTemp = {...store.weatherTomorrow.temp};
    // const nextDayTemp = {...store.weatherNextDay.temp};
    // const nextNextdayTemp = {...store.weatherNextNextDay.temp};
    const[weatherIcon, setWeatherIcon]= useState("")


    // const tomorrowWeather = {...store.weatherTomorrow.weather};
    // const nextDayWeather = {...store.weatherNextDay.weather};
    // const nextNextDayWeather = {...store.weatherNextNextDay.weather};

    // const tomorrowWeatherIcon ={...tomorrowWeather[0]};
    // const nextDayWeatherIcon ={...nextDayWeather[0]};
    // const nextNextDayWeatherIcon ={...nextNextDayWeather[0]};

    const[weatherIconT, setWeatherIconT]= useState("");
    const[weatherIconN, setWeatherIconN]= useState("");
    const[weatherIconNN, setWeatherIconNN]= useState("");
   
// Icons
    const  humidity = <img src="https://i.ibb.co/fpTwnrz/carbon-humidity-alt.png" alt="humidity" />
    const  wind = <img src="https://i.ibb.co/FbCXsPQ/fontisto-wind.png" alt="wind" />
    const  humidityDetail = <img src="https://i.ibb.co/GTQqyWb/detalle-carbon-humidity-alt.png" alt="humidity detail" />
    const  windDetail = <img src="https://i.ibb.co/qdbHbGh/detalle-fontisto-wind.png" alt="wind detail" />
    const  maxTemp = <img src="https://i.ibb.co/CwhpBP5/carbon-temperature-max.png" alt="Maximal Temperature" />
    const  minTemp = <img src="https://i.ibb.co/QCP690z/carbon-temperature-min.png" alt="Minimal temperature" />
    const  sunriseIcon = <img src="https://i.ibb.co/Bw8XxwV/mdi-weather-sunset-up.png" alt="sunrise" />
    const  sunsetIcon = <img src="https://i.ibb.co/30r3Bpt/Vector.png" alt="Sunset" />
    const seachIcon = <i className="fas fa-search"></i>
    
//HASH TABLE 
    const weatherIcons = {
        "01": <img src="https://i.ibb.co/SBYmTWz/sun.png" alt="clear sky" />,
        "02": <img src="https://i.ibb.co/L1bfzRR/nb12.png" alt="few clouds" />,
        "03": <img src="https://i.ibb.co/qpFZ7xx/nb1.png" alt="scattered clouds" />,
        "04": <img src="https://i.ibb.co/615WTvv/32.png" alt="broken clouds" />,
        "09": <img src="https://i.ibb.co/5vCFCWF/sa.png" alt="shower rain" />,
        "10": <img src="https://i.ibb.co/HH5fxzm/nb.png" alt="rain" />,
        "11": <img src="https://i.ibb.co/dfsFDyC/nb1241.png" alt="thunderstorm" />,
        "13": <img src="https://i.ibb.co/64NftkD/saf.png" alt="snow" />,
        "50": <img src="https://i.ibb.co/ysPQfnh/s.png" alt="mist" />
    }

useEffect(() => {
    window.navigator.geolocation.getCurrentPosition( position => {
        actions.setPosition(position.coords)
    })
}, [])

useEffect(() => {
    if(store.position.latitude) {
        actions.getOnloadWeatherData();
    }
}, [store.position])


//          Change Weather Icon Function

useEffect(()=>{
    console.log("cambiando iconos de nubes y solecitos")

    if(store.weather != {}) {
        console.log(store.weather);
    }

    // const changeAfterdaysIcon = icon =>{
    //     setTo( weatherIcons[icon.slice(0,2)])
    // }

    // changeAfterdaysIcon(store.weatherWeather.icon,setWeatherIcon)
    // changeAfterdaysIcon(tomorrowWeatherIcon.icon,setWeatherIconT);
    // changeAfterdaysIcon(nextDayWeatherIcon.icon,setWeatherIconN);
    // changeAfterdaysIcon(nextNextDayWeatherIcon.icon,setWeatherIconNN);

},[store.weather])


   
//  ONLOAD first Position ------------------------- como parar este monstruo a q deje de pedirle a la api....



    

// Necesary info to GET the place

//     const handleChange = (e) =>{
//         let name = e.target.name;
//         let value = e.target.value;

//         if(name == "city"){
//             setForm({...form, city:value });
//         }
//         if(name == "country"){
//             setForm({...form, country:value });
//         }
//     }

//     async function weatherData (e){
//         e.preventDefault();
//         await actions.getWeatherData(form.city,form.country);
//     }

// //      Transform and set Units of Time to string_time
//     useEffect(()=>{
//         let sunR = store.weatherSys.sunrise
//         let sunR_date= new Date(sunR*1000)
//         let timeSunR_str = sunR_date.toLocaleTimeString()
//         setSunrise(timeSunR_str)
//         let sunS = store.weatherSys.sunset
//         let sunS_date= new Date(sunS*1000)
//         let timeSunS_str = sunS_date.toLocaleTimeString()
//         setSunset(timeSunS_str)
//         console.log("sunrise & tristise")
//     },[store.weatherSys])

// //      Send the coord to the second API request     
//     useEffect(()=>{
//         actions.getThreeDaysWeatherData(store.weatherCoord.lat,store.weatherCoord.lon)
//         console.log("Dias despues FETCH")
//     },[store.weatherCoord])

////////////////// TODO ////////////////////////////////
    //      DATES

    let today = new Date()
    let date = today.getDate()+'/'+today.getMonth();
    let tomorrow = new Date()
    let Tdate = tomorrow.getDate()+1+'/'+tomorrow.getMonth();
    let nextDay = new Date()
    let Ndate = nextDay.getDate()+2+'/'+nextDay.getMonth();
    let nextNextDay = new Date()
    let NNdate = nextNextDay.getDate()+3+'/'+nextNextDay.getMonth();

    return(<div>Forecast</div>)
    // return(
    //     <div className="forecast-body" /* onLoad={onloadLocation()} */>
    //         <div className="forecast-topbody">
    //             <p>WHERE?</p>
    //             <div className="forecast-searchBar__Box">
    //                 <input 
    //                     type="text" 
    //                     name="city" 
    //                     placeholder="City" 
    //                     className="forecast-seachBar__input" 
    //                     onChange= {e => handleChange(e)}
    //                 />
    //                 <input 
    //                     type="text" 
    //                     name="country" 
    //                     placeholder="Country" 
    //                     className="forecast-seachBar__input" 
    //                     onChange= {e => handleChange(e)}
    //                 />
    //                 <div className="searchBar-container__button">
    //                     <button 
    //                         as="input" 
    //                         type="submit"
    //                         value="" 
    //                         className="forecast-seachBar__button"
    //                         onClick={ (e) =>{
    //                             weatherData(e)
    //                             console.log("SUBMIT",form.city,form.country)
    //                         }}
    //                     >{seachIcon}</button>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="forecast-forecastbody">
    //             <div className="forecast-forecastbody__today">
    //                 <p>4 Days Weather, {store.weather.name}, {store.weatherSys.country},   {date}</p>
                    
    //                 <div className="forecast-forecastbody__today__primaryDates">
    //                     {/* <div className="primaryDates__temp">
    //                         <span >{store.weatherMain.temp}°</span>
    //                         {weatherIcon}
    //                         <span >{store.weatherWeather.main}</span>
    //                     </div> */}
    //                     <div className="primaryDates__windHum">
    //                         <div className="primaryDates__windHum__Humidity">
    //                             {humidity}
    //                             <span>{store.weatherMain.humidity}%</span>
    //                         </div>
    //                         <div className="primaryDates__winHum__Wind">
    //                             {wind}
    //                             <span>{store.weatherWind.speed} m/s</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="forecast-forecastbody__today__secondaryDates">
    //                     <div className="forecast-forecastbody__today__maxTempRiseLvl">
    //                         <div>{sunriseIcon} <span>{sunrise}</span></div>
    //                         <div>{maxTemp} <span>{store.weatherMain.temp_max}°</span></div>
    //                     </div>
    //                     <div className="forecast-forecastbody__today__minTempSet">
    //                         <div>{sunsetIcon} <span>{sunset}</span></div>
    //                         <div>{minTemp} <span>{store.weatherMain.temp_min}°</span></div>
                            
    //                     </div>
    //                 </div>  
    //             </div>
    //             <div className="forecast-forecastbody__nextDays">
    //                 <div className="forecast-forecastbody__tomorrow">
    //                     <div className="secondaryDates__firstpart">
    //                         <span>{Tdate}</span>
    //                         <span>{tomorrowTemp.max}°/{tomorrowTemp.min}°</span>
    //                         {weatherIconT}
    //                         <span>{tomorrowWeatherIcon.description}</span>
    //                     </div>
    //                     <div className="secondaryDates__secondPart">
    //                         {humidityDetail} <span>{store.weatherTomorrow.humidity}%</span>
    //                         {windDetail} <span>{store.weatherTomorrow.wind_speed} m/s</span>
    //                     </div>
    //                 </div>
    //                 <div className="forecast-forecastbody__afterTomorrow">
    //                     <div className="secondaryDates__firstpart">
    //                         <span>{Ndate}</span>
    //                         <span>{nextDayTemp.max}°/{nextDayTemp.min}°</span>
    //                         {weatherIconN}
    //                         <span>{nextDayWeatherIcon.description}</span>
    //                     </div>
    //                     <div className="secondaryDates__secondPart">
    //                         {humidityDetail} <span>{store.weatherNextDay.humidity}%</span>
    //                         {windDetail} <span>{store.weatherNextDay.wind_speed} m/s</span>
    //                     </div>
    //                 </div>
    //                 <div className="forecast-forecastbody__afterAfterTomorrow">
    //                     <div className="secondaryDates__firstpart">
    //                         <span>{NNdate}</span>
    //                         <span>{nextNextdayTemp.max}°/{nextNextdayTemp.min}°</span>
    //                         {weatherIconNN}
    //                         <span>{nextNextDayWeatherIcon.description}</span>
    //                     </div>
    //                     <div className="secondaryDates__secondPart">
    //                         {humidityDetail} <span>{store.weatherNextNextDay.humidity}%</span>
    //                         {windDetail} <span>{store.weatherNextNextDay.wind_speed} m/s</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Forecast;