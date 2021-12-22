import jwt_decode from "jwt-decode";

const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");
import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: {},
			loggedUser: {},
			favourites: [],
			token: {},
			position: {
				latitude: null,
				longitude: null
			},
			weather: {},
		},

		actions: {
			setLoggedUser: (user) => {
				setStore({"loggedUser": user});
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({"loggedUser": null})
			
			},

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
			
			login: async (data) => {
				// const tokenDecode = token => {
				// 	let decoded = jwt_decode(token);
				// 	return decoded;
				// };
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
					}
					
					const data = await resp.json();
					console.log("this came from the backend", data);
					
					localStorage.setItem("token", data.token);
					const tokenDecoded = jwt_decode(data.token);
					setStore({"loggedUser": tokenDecoded});
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
					const tokenDecoded = jwt_decode(data.token);
					setStore({"loggedUser": tokenDecoded});

				}
				catch(error){
					console.error("There was an error!!", error);
				}
			},
			
			getProfile: async (id) => {
				let token = localStorage.getItem("token");
				let myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${token}`);

				let requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};

				await fetch(getStore().baseUrl.concat(`account/${id}`), requestOptions)
				.then(response => response.json())
				.then(result => {
					setStore({currentUser: {
						result: result,
						user: result.user
					}}),
					setStore({token: token})
					console.log(result)
				})
				.catch(error => console.log('error', error));

			},


			editProfile: async (data, id) => {
				let token = localStorage.getItem("token");
				const opt = {
					method: 'PATCH',
					headers: new Headers({
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}),
					body: JSON.stringify(data)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat('account/', id), opt)
					if (resp.status !== 201) {
						// alert("There has been some error");
					}

					const result = await resp.json();
					setStore({currentUser: {
						result: result,
						user: result.user
					}}),
					setStore({token: token})
					console.log(result)
				}
				catch(error){
					console.error("There was an error!!", error);
				}
			},

			deleteProfile: async (data, id) => {
				let token = localStorage.getItem("token");
				const opt = {
					method: 'DELETE',
					headers: new Headers({
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}),
					body: JSON.stringify(data)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat(`account/${id}`), opt)
					if (resp.status !== 201) {
						//alert("There has been some error");
						// return false;
					}
					const data = await resp.json();
					console.log(data);
				}
				catch(error){
					console.error("There was an error!!", error);
					}
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
				if (id){
					setStore({ user: responseAsJson });
	                console.log(responseAsJson);
				}		
	        })
            .catch(function(error) {
	             console.log('Looks like there was a problem: \n', error);
                 });
			},
			
			addFavourites: name => {
				if (
					!getStore().favourites.find(favourite => {
						return favourite == name;
					})
				) {
					setStore({ favourites: [...getStore().favourites, name] });
				}
			},

			deleteFavourites: deleted => {
				setStore({
					favourites: getStore().favourites.filter(item => item != deleted)
				});
			}

		}
	};
};

export default getState;
