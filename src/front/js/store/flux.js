const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			position: {
				latitude: null,
				longitude: null
			},
			weather: {},
		},
		actions: {
			setPosition: (coords) => {
				setStore({position: {
					latitude: coords.latitude,
					longitude: coords.longitude
				}})
			},
			getOnloadWeatherData: () => {
				console.log('position', getStore().position);
				fetch(`${process.env.FORECAST_BASE_URL}lat=${getStore().position.latitude}&lon=${getStore().position.longitude}&appid=${process.env.FORECAST_API_KEY}&units=metric`)
					.then(resp =>{
						if(resp.ok) {
							return resp.json();
						}
						//return throw new Error("Fail loading weather");
					})
					.then(data =>{
						console.log("1est ONLOAD",data) 
						setStore({ weather: {
							city: '',
							weatherMain: data.main,
							weatherCoord: data.coord,
							weatherSys: data.sys,
							weatherWeather: data.weather[0],
							weatherWind: data.wind,
							weatherTomorrow:{},
							weatherNextDay:{},
							weatherNextNextDay:{}
						}});					
					})
					.catch(error => {
						console.log(error.message);
					});
			}
			// getWeatherData:(city,country,APYKEY)=>{
			// 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APYKEY}&units=metric`)
			// 		.then(resp => resp.json())
			// 		.then(data =>{
			// 			console.log("CITY & COUNTRY",data) 
			// 			setStore({ weather:{...data}});
			// 			setStore({ weatherMain: {...data.main}});
			// 			setStore({ weatherCoord: {...data.coord}});
			// 			setStore({ weatherSys: {...data.sys}});
			// 			setStore({ weatherWeather: {...data.weather[0]}});
			// 			setStore({ weatherWind: {...data.wind}});						
			// 		})
			// 		.catch(error => {
			// 			console.log(error.message);
			// 		});
			// },
			// getThreeDaysWeatherData:(lat,lon)=>{
			// 	fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=4c9d5d836f80271244b23b473f5783a7&units=metric`)
			// 		.then(resp => resp.json())
			// 		.then(data =>{
			// 			console.log("THREE DAYS AFTER",data)
			// 			setStore({ weatherTomorrow: {...data.daily[1]}});
			// 			setStore({ weatherNextDay: {...data.daily[2]}});
			// 			setStore({ weatherNextNextDay: {...data.daily[3]}});													
			// 		})
			// 		.catch(error => {
			// 			console.log(error.message);
			// 		});
			// }
		}

	}
};


export default getState;
