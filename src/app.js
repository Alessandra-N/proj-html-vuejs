const app = new Vue ({
    el: "#app",

    data: {
        jumboLinks: [
            "Home", 
            "About", 
            "Projects", 
            "Process", 
            "Testimonials",
        ],

        actionLinks:[
            "All",
            "Institutional",
            "social",
            "events",
            "innovation",
            "environment",
            "technology",
        ],

        actionGallery: [
            {
                picLink: "1.jpg",
                picText: "Academic professional program in social media"
            },
            {
                picLink: "2.jpg",
                picText: "President's speech at the annual meeting"
            },
            {
                picLink: "3.jpg",
                picText: "International business trip in Shangai"
            },
            {
                picLink: "4.jpg",
                picText: "Technology workshop with education theme"
            },
            {
                picLink: "5.jpg",
                picText: "Donation of clothes and food to the partner NGO"
            },
            {
                picLink: "6.jpg",
                picText: "Confraternization of the procurement team"
            }
        ],

        threeCards: [
            {
                img: "fas fa-user-friends",
                title: "Human Capital",
                parag: "Humanizing business: Harness the power of technology to improve the way people work.",
            },
            {
                img: "fas fa-chart-pie",
                title: "Core Business",
                parag: "It takes innovative approaches to transform, and run existing platforms.",
            },
            {
                img: "fas fa-tachometer-alt",
                title: "Performance",
                parag: "Achieving maximum impact and value from investments in finance and supply chain",
            }
        ],

        subscribers: [
            {
                type: "Employees",
                users: 0,
                content: "Lorem ipsum dolor sit amet."
            },
            {
                type: "Partners",
                users: 0,
                content: "Lorem ipsum dolor sit amet."
            },
            {
                type: "Customers",
                users: 0,
                content: "Lorem ipsum dolor sit amet."
            }
        ],

        actions: [
            {
                position: "01",
                title: "Collection of information",
                paragraph: "Lorem ipsum dolor sit amet consectetur."
            },
            {
                position: "02",
                title: "Strategic planning",
                paragraph: "Lorem ipsum dolor sit amet consectetur."
            },
            {
                position: "03",
                title: "Assignment of responsibilities",
                paragraph: "Lorem ipsum dolor sit amet consectetur."
            },
            {
                position: "04",
                title: "Formatting process",
                paragraph: "Lorem ipsum dolor sit amet consectetur."
            },
            {
                position: "05",
                title: "Continuity formalization",
                paragraph: "Lorem ipsum dolor sit amet consectetur."
            }
        ],

        feedbacks: [
            {
                link: "-1.png",
                paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
                conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita.",
            },
            {
                link: "-2.png",
                paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
                conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita.",
            },
            {
                link: "-3.png",
                paragraph: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eveniet, vitae dolores fugit nihil at dolor adipisci dignissimos voluptas. Ea quia placeat mollitia ullam dolore?",
                conclusions: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, expedita.",
            }
        ]
    },

})