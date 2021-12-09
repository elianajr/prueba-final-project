data = {
    "Sport":[
        {
			"id": 1,
            "name": "Scuba diving"
		},
        {
			"id": 2,
            "name": "Surf"
		},
        {
			"id": 3,
            "name": "Kitesurf"
		},
        {
			"id": 4,
            "name": "Snorkel"
		}
    ],
    "Account":[
        {
			"id": 1,
            "email": "elianajr1@gmail.com",
            "_password": "123456",
            "username": "elianajr",
            "photo": "https://images.unsplash.com/photo-1601220475188-c8319bab873e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRpdmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "_is_active": True,
            "_is_waterdropper": True,
            "sport_id": 1
		},
        {
            "id": 2,
            "email": "puravida@gmail.com",
            "_password": "123456",
            "username": "Pura vida diving",
            "photo": "https://media.istockphoto.com/photos/underwater-scuba-diver-explore-and-enjoy-coral-reef-sea-life-picture-id498283106?b=1&k=20&m=498283106&s=170667a&w=0&h=vroEmC2hFoTldjzS9avb-2mxTPIjYvUHI-iQC6YQgsI=",
            "_is_active": True,
            "_is_waterdropper": False,
            "sport_id": 1
        },
        {
            "id": 3,
            "email": "folken@gmail.com",
            "_password": "123456",
            "username": "folkencillo",
            "photo": "https://media.istockphoto.com/photos/catching-an-octopus-picture-id467336142?b=1&k=20&m=467336142&s=170667a&w=0&h=vtzbnZWxiVPWWMAhXMccNVRpzmhC2Pfaer2nu3keFDA=",
            "_is_active": True,
            "_is_waterdropper": True,
            "sport_id": 2
        },
        {
            "id": 4,
            "email": "indrasurf@gmail.com",
            "_password": "123456",
            "username": "Indra Surf Bali",
            "photo": "https://media.istockphoto.com/photos/surfer-falling-picture-id1286973195?b=1&k=20&m=1286973195&s=170667a&w=0&h=8NV6Y5fWybJalD6LIvjoEZPfIN0A7RAbaT8ce3q5UmM=",
            "_is_active": True,
            "_is_waterdropper": False,
            "sport_id": 2
        }
    ], 

    "Waterdropper": [
        {
			"id": 1,
            "first_name": "Eliana",
            "last_name": "Jordan",
            "level": "Professional",
            "location": "Madrid",
            "account_id": 1
		},
        {
			"id": 2,
            "first_name": "Juan",
            "last_name": "Guerrero",
            "level": "Intermediate",
            "location": "Malaga",
            "account_id": 3
		}
    ],

    "Center":[
        {
			"id": 1,
            "address": "9/24, Koh Tao, Surat Thani 84360, Thailand",
            "account_id": 2
		},
        {
			"id": 2,
            "address": "Jl.Pantai Batu Bolong #32A, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
            "account_id": 4
		}
    ]
}