import { set } from "react-hook-form";
import jwt_decode from "jwt-decode";

const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: "",
			loggedUser: "",
			getUserProfile: {},
			editUserPRofile: {},
			token: "",
			mytoken: "",
			userId: "",
			favourites: [],
		},

		actions: {

			syncTokenFromSessionStore: () => {
				const token = localStorage.getItem("token");
				console.log("App loaded, store token");
				if(token && token != 0 && token != null) {
					setStore({ token : token })
				};
			},
			
			logout: () => {
				// if (sessionStorage.getIem("token")) {
					localStorage.removeItem("token");
					console.log("loging out");
					setStore({ token : null });
				// }
			},
			
			login: async data => {
				const opts = {
					method: 'POST',
					headers: new Headers({
						'Content-Type': 'application/json'
					}),
					body: JSON.stringify(data)
				};
				
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};

				const setUserFromToken = token => {
					localStorage.setItem("Id", token.sub.id);
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat("login"), opts)
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}
					
					const data = await resp.json();
					console.log("this came from the backend", data);
					localStorage.setItem("jwt-token", data.token);
					const tokenDecoded = tokenDecode(data.token);
					console.log(tokenDecoded);
					setStore({userId : tokenDecoded});
					setUserFromToken(tokenDecoded);
				
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
			
			getProfile: async (id) => {
				let token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + token);

				var requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};

				await fetch("https://3001-cyan-lobster-g63lf7ls.ws-eu23.gitpod.io/api/account/" + String(id), requestOptions)
				.then(response => response.json())
				.then(result => {
					console.log(result),
					setStore({getUserProfile: {
						result: result,
						user: result.user
					}}),
					setStore({mytoken: token})
				})
				.catch(error => console.log('error', error));

				let store = getStore()
				console.log(store.getUserProfile);

			},

			editProfile: async (id) => {
				let token = localStorage.getItem("token");
				var myHeaders = new Headers();
				myHeaders.append("Authorization", `Bearer ${token}`);
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
				method: 'PUT',
				headers: myHeaders,
				redirect: 'follow'
				};

				await fetch("https://3001-cyan-lobster-g63lf7ls.ws-eu23.gitpod.io/api/account/" + String(id), requestOptions)
				.then(response => response.json())
				.then(result => {
					console.log(result)
					// setStore({currentUser: result}),
					// setStore({mytoken: token})
				})
				.catch(error => console.log('error', error));

				// let store = getStore()
				// console.log(store.currentUser);
			},

			deleteProfile: async data => {
				// getActions().logout();
				// let token = localStorage.getItem("access_token");
				const opt = {
					method: 'DELETE',
					headers: new Headers({
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}),
					body: JSON.stringify(data)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat("account/", id), opt)
					if (resp.status !== 201) {
						alert("There has been some error");
						return false;
					}

					const data = await resp.json();

					// localStorage.setItem("token", data.token);
					// setStore({ token : data.token });

					// localStorage.setItem("currentUser", JSON.stringify(data.account));
					// setStore({ currentUser : data.account});

					return true;
				}
				catch(error){
					console.error("There was an error!!", error);
					}

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



	// return {
	// 	store: {
	// 		message: null,
	// 		demo: [
	// 			{
	// 				title: "FIRST",
	// 				background: "white",
	// 				initial: "white"
	// 			},
	// 			{
	// 				title: "SECOND",
	// 				background: "white",
	// 				initial: "white"
	// 			}
	// 		]
	// 	},
	// 	actions: {
	// 		register: data => {
	// 			fetch(
	// 				process.env.GITPOD_WORKSPACE_URL
	// 				// , {
	// 				// method: 'POST',
	// 				// headers: {
	// 				// 	'Content-type': 'application/json',
	// 				// },
	// 				//  body: JSON.stringify({
	// 				// 	username: 'email',
	// 				// 	password: 'password',
	// 				// 	Authorization: 'TheReturnedToken',
	// 				// })
	// 			)
	// 				.then(response => {
	// 					if (response.ok) {
	// 						return response.json();
	// 					}
	// 					throw new Error("Access not permited");
	// 				})
	// 				.then(responseAsJSON => {
	// 					setStore({ data: data });
	// 					console.log(responseAsJSON);
	// 				})
	// 				.catch(error => {
	// 					console.log(error);
	// 				});


	// 		},
	// 		// Use getActions to call a function within a fuction
	// 		exampleFunction: () => {
	// 			getActions().changeColor(0, "green");
	// 		},

	// 		getMessage: () => {
	// 			// fetching data from the backend
	// 			fetch(process.env.BACKEND_URL + "/api/hello")
	// 				.then(resp => resp.json())
	// 				.then(data => setStore({ message: data.message }))
	// 				.catch(error => console.log("Error loading message from backend", error));
	// 		},
	// 		changeColor: (index, color) => {
	// 			//get the store
	// 			const store = getStore();

	// 			//we have to loop the entire demo array to look for the respective index
	// 			//and change its color
	// 			const demo = store.demo.map((elm, i) => {
	// 				if (i === index) elm.background = color;
	// 				return elm;
	// 			});

	// 			//reset the global store
	// 			setStore({ demo: demo });
	// 		}
	// 	}
	// };
};

export default getState;
