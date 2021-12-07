const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			weather: {},
			main: []
		},
		actions: {
			
			getWeatherData:(city,country,APYKEY)=>{
				fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APYKEY}&units=metric`)
					.then(resp => resp.json())
					.then(data =>{ 
						setStore({ weather:{...data}})
					})
			}
		}

	}
};


export default getState;
