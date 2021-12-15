const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: "",
			token: "",
			position: {
				latitude: null,
				longitude: null
			},
			weather: {},
			nextDaysWeather: {}
		},

		actions: {

			login: async data => {
				const opts = {
					method: 'POST',
					headers: new Headers({
						'Content-Type': 'application/json'
					}),
					body: JSON.stringify(data)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat("login"), opts)
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}

					const data = await resp.json();
					console.log("this came from the backend", data);
					localStorage.setItem("token", data.token);
					setStore({ token : data.token });
					return true;
				}
				catch(error){
					console.error("There was an error!!", error);
					}

			},

			register: async data => {
				const opt = {
					method: 'POST',
					headers: new Headers({
						'Content-Type': 'application/json'
					}),
					body: JSON.stringify(data)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat("account"), opt)
					if (resp.status !== 201) {
						alert("There has been some error");
						return false;
					}

					const data = await resp.json();

					localStorage.setItem("token", data.token);
					setStore({ token : data.token });

					localStorage.setItem("currentUser", JSON.stringify(data.account));
					setStore({ currentUser : data.account});

					return true;
				}
				catch(error){
					console.error("There was an error!!", error);
					}

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
	};

};


export default getState;
