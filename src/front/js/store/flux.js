const PORT = 3001;
const [PROTOCOL, HOST] = process.env.GITPOD_WORKSPACE_URL.split("://");
import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			url: 'https://3001-blue-possum-td8j7tcj.ws-eu25.gitpod.io/',
			users:[],
			user:{},
			baseUrl: `${PROTOCOL}://${PORT}-${HOST}/api/`,
			currentUser: "",
			token: {},
			position: {
				latitude: null,
				longitude: null
			},
			weather: {}
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
			login: async (data) => {
				const tokenDecode = token => {
					let decoded = jwt_decode(token);
					return decoded;
				};
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
						return false;
					}

					const data = await resp.json();
					console.log("this came from the backend", data);
					localStorage.setItem("token", data.token);
					const tokenDecoded = tokenDecode(responseAsJson);
					console.log(tokenDecoded)
					setStore({ token : data.token });
					return true;
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
			
		}
    };

}


export default getState;
