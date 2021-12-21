from werkzeug.security import generate_password_hash

data = {
     "Sport":[
        {
            "id": 1,
            "name": "scuba"
        },
        {
            "id": 2,
            "name": "surf"
        },
        {
            "id": 3,
            "name": "kitesurf"
        },
        {
            "id": 4,
            "name": "snorkel"
        }
    ],
    "Account":[
        {
            "id": 1,
            "email": "elianajr1@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "elianajr",
            "photo": "eliana-sea-dragons.png",
            "cover_photo": "eliana-turtle.png",
            "instagram": "https://www.instagram.com/eliana_jordan/",
            "facebook": "https://www.facebook.com/eliana.jordan.romea",
            "about": "I learn how to dive 7 years ago in Thailand and since the very first moment I got absolute amazed by the underwater world, all colours, fish and feeling the water on top of my head, made me feel like an astronaut who want to meet every single specie. 4 years ago I decided to become instructor to share my passion with everybody!",
            "_is_active": True,
            "_is_waterdropper": True
        },
        {
            "id": 2,
            "email": "puravida@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "Pura vida diving",
            "photo": "photo",
            "about": "After 14 years learning and teaching, our motto haven’t changed: passion for the ocean, for you, for teaching y for sharing our little paradise called Koh Tao. We are the first Spanish teaching school and we want to make you feel as part of a big family! We are a SSI center teaching up to instructor.",
            "_is_active": True,
            "_is_waterdropper": False
        },
        {
            "id": 3,
            "email": "folken@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "folkencillo",
            "photo": "photo",
            "_is_active": True,
            "_is_waterdropper": True
        },
        {
            "id": 4,
            "email": "indasurf@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "In Da Surf Bali",
            "photo": "photo",
            "_is_active": True,
            "_is_waterdropper": False
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
            "phone": "111111111",
            "web": "https://www.puravida.com",
            "account_id": 2
        },
        {
            "id": 2,
            "address": "Jl.Pantai Batu Bolong #32A, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
            "phone": "111111112",
            "web": "https://www.surf.com",
            "account_id": 4
        }
    ]
}