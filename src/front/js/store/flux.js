const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			users:[]
		},
		actions: {
			// Use getActions to call a function within a fuctio
			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			}
			
			
			
			
		}
	};
};

export default getState;
