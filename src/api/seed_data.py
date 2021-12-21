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
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024461/waterdropper/eliana-sea-dragons_rbm3lv.png",
            "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024460/waterdropper/eliana-turtle_e3nrct.png",
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
            "username": "puravidadiving",
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024460/waterdropper/pura-vida-logo_tpltcc.png",
	        "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024460/waterdropper/pura-vida-cover_km4jhz.png",
            "about": "After 14 years learning and teaching, our motto haven’t changed: passion for the ocean, for you, for teaching y for sharing our little paradise called Koh Tao. We are the first Spanish teaching school and we want to make you feel as part of a big family! We are a SSI center teaching up to instructor.",
            "_is_active": True,
            "_is_waterdropper": False
        },
        {
            "id": 3,
            "email": "folken@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "folkencillo",
            "about": "I´m a beautiful Full Stack Developer. Constantly trying to improve and learn. I love drawing and in free time I like to go for free diving. Octopus are one of my favourite marine creatures, My octopus teacher documentary deeply moved me",
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024630/waterdropper/folken-profile_dxjtge.png",
            "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640114455/waterdropper/octopus-cover_lqikhi.png",
	        "_is_active": True,
            "_is_waterdropper": True
        },
        {
            "id": 4,
            "email": "indasurf@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "indasurf",
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024460/waterdropper/in_da_surf_bali-logo_s1jmfh.png",
	        "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640024460/waterdropper/in_da_surf_bali-cover_x322ti.png",
            "about": "We are a family run surf camp in Bali. We do only semi-private surf lessons (max 2 guests with 1 coach) with an individual program according to every guest level and goal what makes our camp suitable for all levels (from beginner to advance surfers).",
            "_is_active": True,
            "_is_waterdropper": False
        },
        {
            "id": 5,
            "email": "ruben@gmail.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "rubenl",
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640114454/waterdropper/ruben-profile_evmcnp.png",
	        "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640114455/waterdropper/surf-cover_gyki1r.png",
            "about": "I'm a very calm, hard worker and organized person. After few years working in finance, I met my friend Juan and we started to travel the world surfing at the best turquoise water beaches. Now, I have decided follow my passion and become surf instructor.",
            "_is_active": True,
            "_is_waterdropper": True
        },
        {
            "id": 5,
            "email": "info@c2sky.com",
            "_password": generate_password_hash("123456", method='pbkdf2:sha256', salt_length=16),
            "username": "c2sky",
            "photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640114454/waterdropper/C2Sky-profile_ub4gfi.png",
	        "cover_photo": "https://res.cloudinary.com/dbopipvcs/image/upload/v1640114455/waterdropper/C2Sky-cover_sqosif.png",
            "about": "We are a kitesurfing school. C2Sky has actually a few meanings, firstly as an outdoor activity of kite flying we SEE 2 the Sky. I guess the more obvious is that we jump around from the SEA 2 THE SKY.Then we have the shape of the kites. No doubt we had to add the letter C in our name branding.",
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
        },
        {
            "id": 5,
            "first_name": "Ruben",
            "last_name": "Lopez",
            "level": "Advanced",
            "location": "Barcelona",
            "account_id": 3
        }
    ],

    "Center":[
        {
            "id": 1,
            "name": "Pura Vida Diving",
            "address": "9/24, Koh Tao, Surat Thani 84360, Thailand",
            "phone": "111111111",
            "web": "https://www.puravida.com",
            "account_id": 2
        },
        {
            "id": 2,
            "name": "In Da Surf Bali",
            "address": "Jl.Pantai Batu Bolong #32A, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia",
            "phone": "111111112",
            "web": "https://www.surf.com",
            "account_id": 4
        },
        {
            "id": 2,
            "name": "C2Sky",
            "address": "16 Nguyen Dinh Chieu Street, Mui Ne, Vietnam",
            "phone": "111111113",
            "web": "https://c2skykitecenter.com/",
            "account_id": 6
        },
    ]
}