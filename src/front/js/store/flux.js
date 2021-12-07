const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			/* weatherUrl: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APYKEY}&units=metric`, */
			weather: []
		},
		actions: {
			
			getWeatherData:(city,country,APYKEY)=>{
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APYKEY}&units=metric`)
					.then(resp => resp.json)
					.then(data =>{
						setStore({ weather:[data]})
					})
					.catch(error =>{
						console.log(error.message)	
					})
			}
		}

	}
};


export default getState;
