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
            "photo": "photo",
            "_is_active": True,
            "_is_waterdropper": True,
            "sport_id": 1
		},
        {
            "id": 2,
            "email": "puravida@gmail.com",
            "_password": "123456",
            "username": "Pura vida diving",
            "photo": "photo",
            "_is_active": True,
            "_is_waterdropper": False,
            "sport_id": 1
        },
        {
            "id": 3,
            "email": "folken@gmail.com",
            "_password": "123456",
            "username": "folkencillo",
            "photo": "photo",
            "_is_active": True,
            "_is_waterdropper": True,
            "sport_id": 2
        },
        {
            "id": 4,
            "email": "indrasurf@gmail.com",
            "_password": "123456",
            "username": "Indra Surf Bali",
            "photo": "photo",
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