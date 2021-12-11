const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			url: 'https://3001-blue-possum-td8j7tcj.ws-eu23.gitpod.io/',
			users:[],
			user:{}
		},
		actions: {
			// Use getActions to call a function within a fuctio
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getUsers:()=>{
				fetch(getStore().url.concat('api/account'))
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
			},
			getUser:(id)=>{
				fetch(getStore().url.concat('api/account/',id))
	        .then(function(response) {
		          if (!response.ok) {
	              throw Error(response.statusText);
	        }
    // Read the response as json.
	              return response.json();
	        })
	            .then(function(responseAsJson) {
					setStore({ user: responseAsJson });
	                console.log(responseAsJson);
	        })
                .catch(function(error) {
	             console.log('Looks like there was a problem: \n', error);
                 });
			}		
			
		},
			
	}	
		

	
};

export default getState;
