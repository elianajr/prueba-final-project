import jwt_decode from "jwt-decode";

const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: {},
			loggedUser: {},
			favourites: [],
		},

		actions: {
			setLoggedUser: (user) => {
				setStore({"loggedUser": user});
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({"loggedUser": null})
			},

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
				// let token = localStorage.getItem("token");
				// let myHeaders = new Headers();
				// myHeaders.append("Authorization", `Bearer ${token}`);
				// myHeaders.append("Content-Type", "application/json");

				// let requestOptions = {
				// method: 'PATCH',
				// headers: myHeaders,
				// redirect: 'follow'
				// };

				// await fetch(getStore().baseUrl.concat(`account/${id}`), requestOptions)
				// .then(response => response.json(data))
				// .then(result => {
				// 	console.log(JSON.stringify(result))
				// 	setStore({currentUser: {
				// 		result: result,
				// 		user: result.user
				// 	}}),
				// 	setStore({token: token})
				// })
				// .catch(error => console.log('error', error));

				// // let store = getStore()
				// // console.log(store.currentUser);
				
			},

			deleteProfile: async (data, id) => {
				getActions().logout();
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
						alert("There has been some error");
						// return false;
					}

					const data = await resp.json();
					console.log(data);
					// localStorage.setItem("token", data.token);
					// setStore({ token : data.token });

					// localStorage.setItem("currentUser", JSON.stringify(data.account));
					// setStore({ currentUser : data.account});

					// return true;
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
};

export default getState;
