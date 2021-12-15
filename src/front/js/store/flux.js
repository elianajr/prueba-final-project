const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			position: {
				latitude: null,
				longitude: null
			},
			weather: {},
			nextDaysWeather: {}
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
						
						throw new Error("Fail loading weather");
					})
					.then(data =>{
						setStore({ weather: {
							city: data.name,
							weatherMain: data.main,
							weatherCoord: data.coord,
							weatherSys: data.sys,
							weatherWeather: data.weather[0],
							weatherWind: data.wind,
						}});					
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			getThreeDaysWeatherData: ()=>{
				fetch(`${process.env.FORECAST_THREE_DAYS}lat=${getStore().position.latitude}&lon=${getStore().position.longitude}&exclude=minutely,hourly&appid=${process.env.FORECAST_API_KEY}&units=metric`)
				.then(resp => resp.json())
				.then(data =>{
					console.log("THREE DAYS AFTER",data)
					setStore({nextDaysWeather: {
						weatherToday: data.daily[0],
						weatherTomorrow: data.daily[1],
						weatherNextDay: data.daily[2],
						weatherNextNextDay: data.daily[3]
					}})													
				})
				.catch(error => {
					console.log(error.message);
				});
			},
			getWeatherData:(city,country,APYKEY)=>{
			 	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.FORECAST_API_KEY}&units=metric`)
			 		.then(resp => resp.json())
			 		.then(data =>{
			 			setStore({ weather: {
							city: data.name,
							weatherMain: data.main,
							weatherCoord: data.coord,
							weatherSys: data.sys,
							weatherWeather: data.weather[0],
							weatherWind: data.wind,
						}});						
			 		})
			 		.catch(error => {
			 			console.log(error.message);
			 		});
			}
		}

	}
};


export default getState;
