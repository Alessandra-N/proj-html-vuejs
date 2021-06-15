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
                users: 0
            },
            {
                type: "Partners",
                users: 0
            },
            {
                type: "Customers",
                users: 0
            }
        ]
    },

})