const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: "",
			token: ""
		},

		actions: {
			// login: data => {
			// 	// const redirect = () => {
			// 	// 	if (localStorage.getItem("token") != null) {
			// 	// 		window.location = getStore().domainURL.concat("controlpage");
			// 	// 	}
			// 	// };
			// 	const tokenDecode = token => {
			// 		let decoded = jwt_decode(token);
			// 		return decoded;
			// 	};
			// 	const setUserFromToken = token => {
			// 		localStorage.setItem("Id", token.sub.id);
			// 		localStorage.setItem("Name", token.sub.first_name);
			// 	};

			// 	fetch(getStore().baseURL.concat("login"), {
			// 		method: "POST",
			// 		headers: new Headers({
			// 			"Content-Type": "application/json"
			// 		}),
			// 		body: JSON.stringify(data)
			// 	})
			// 		.then(resp => {
			// 			if (resp.status === 200) {
			// 				console.log(resp);
			// 				return resp.json();
			// 			} else if (resp.status === 401) {
			// 				console.log("Invalid credentials");
			// 			} else if (resp.status === 400) {
			// 				console.log("Invalid email or password format");
			// 			} else throw Error("Unknown error");
			// 		})
			// 		.then(data => {
			// 			localStorage.setItem("token", data.token);
			// 			const tokenDecoded = tokenDecode(data.token);
			// 			setUserFromToken(tokenDecoded);
			// 			redirect();
			//		console.log("this came from the backend", data);
			//		setStore({ token : data.token });
			// 		})
			// 		.catch(error => {
			// 			alert("hey");
			// 			localStorage.removeItem("token");
			// 		});
			// },

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("App loaded, store token");
				if(token && token != 0 && token != null) {
					setStore({ token : token })
				};
			},
			
			logout: () => {
				// if (sessionStorage.getIem("token")) {
					sessionStorage.removeItem("token");
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
					body: JSON.stringify(data
						// {
						// 	email: email,
						// 	password: password
						// }
						)
				};

				try{
					const resp = await fetch(getStore().baseUrl.concat("login"), opts)
					if (resp.status !== 200) {
						alert("There has been some error");
						return false;
					}

					const data = await resp.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.token);
					setStore({ token : data.token });
					return true;
				}
				catch(error){
					console.error("There was an error!!", error);
					}

			},

			// 	try {
			// 		let response = await fetch(getStore().baseUrl.concat("login"),{
			// 				method: 'POST',
			// 				headers: new Headers({
			// 					'Content-Type': 'application/json'
			// 				}),
			// 				body: JSON.stringify(data
			// 					// {
			// 					// 	email: email,
			// 					// 	password: password
			// 					// }
			// 					)
			// 			});
			// 		console.log(response);

			// 		if (response.ok) {
			// 			let newUser = await response.json();
			// 			setStore({ currentUser: newUser });
			// 		}
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// },

			register: async data => {
				try {
					let response = await fetch(getStore().baseUrl.concat("account"),{
							method: 'POST',
							mode: 'cors',
							redirect: 'follow',
							headers: new Headers({
								'Content-Type': 'application/json'
							}),
							body: JSON.stringify(data)
						});
					console.log(response);

					if (response.ok) {
						let newUser = await response.json();
						setStore({ currentUser: newUser });
					}
				} catch (error) {
					console.log(error);
				}
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
