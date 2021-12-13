const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			backendurl:'https://3001-blue-possum-td8j7tcj.ws-eu23.gitpod.io/api/account',
			fronturl:'https://3000-blue-possum-td8j7tcj.ws-eu23.gitpod.io/'
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getUsers:()=>{
				fetch(getStore().backendurl)
	        .then(function(response) {
		          if (!response.ok) {
	              throw Error(response.statusText);
	        }
    // Read the response as json.
	              return response.json();
	        })
	            .then(function(responseAsJson) {
					setStore({ users: responseAsJson });
	                console.log(responseAsJson);
	        })
                .catch(function(error) {
	             console.log('Looks like there was a problem: \n', error);
                 });
			}
			
		}
	};
};

export default getState;
