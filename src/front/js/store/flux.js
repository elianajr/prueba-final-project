const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			url:'https://3001-blue-possum-td8j7tcj.ws-eu23.gitpod.io/api/account'
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			getUsers:()=>{
				fetch(getStore().url)
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
