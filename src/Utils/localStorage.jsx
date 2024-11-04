const employees = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "johndoe123",
        "role": "Employee",
        "tasks": [
            {
                "title": "Complete Project Report",
                "description": "Finalize and submit the quarterly project report.",
                "date": "2024-11-10",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Participate in the weekly team meeting to discuss progress.",
                "date": "2024-11-05",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update Database",
                "description": "Ensure the customer database is updated with recent entries.",
                "date": "2024-11-15",
                "category": "Data Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "janesmith456",
        "role": "Employee",
        "tasks": [
            {
                "title": "Client Follow-Up",
                "description": "Follow up with clients regarding their feedback.",
                "date": "2024-11-08",
                "category": "Client Relations",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare Presentation",
                "description": "Create a presentation for the upcoming client meeting.",
                "date": "2024-11-12",
                "category": "Presentations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Budget Review",
                "description": "Review the budget allocations for the next quarter.",
                "date": "2024-11-20",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "email": "bob.brown@example.com",
        "password": "bobbrown789",
        "role": "Employee",
        "tasks": [
            {
                "title": "System Maintenance",
                "description": "Perform regular maintenance on the company systems.",
                "date": "2024-11-11",
                "category": "IT",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Review Security Protocols",
                "description": "Evaluate the current security protocols and suggest improvements.",
                "date": "2024-11-16",
                "category": "Security",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Training Session",
                "description": "Attend the scheduled training session for new software.",
                "date": "2024-11-03",
                "category": "Training",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "alice.johnson@example.com",
        "password": "alicejohnson101",
        "role": "Employee",
        "tasks": [
            {
                "title": "Market Research",
                "description": "Conduct market research for the upcoming product launch.",
                "date": "2024-11-13",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Content Creation",
                "description": "Create content for the company blog.",
                "date": "2024-11-09",
                "category": "Content",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Building Activity",
                "description": "Organize a team building activity for the department.",
                "date": "2024-11-25",
                "category": "Events",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "mike.davis@example.com",
        "password": "mikedavis202",
        "role": "Employee",
        "tasks": [
            {
                "title": "Website Update",
                "description": "Update the website with the latest information.",
                "date": "2024-11-04",
                "category": "Web Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "SEO Optimization",
                "description": "Optimize the website for better search engine visibility.",
                "date": "2024-11-14",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Proposal Draft",
                "description": "Draft a proposal for the new client project.",
                "date": "2024-11-30",
                "category": "Proposals",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        // "username": "superadmin",
        "email": "admin@example.com",
        "password": "admin123",
        // "role": "Super Administrator",
        // "permissions": ["all_access", "manage_employees", "manage_users"]
    }
]

export const setLocalStorage = () =>{
    localStorage.setItem('employess', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employess'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    console.log(admin)
    console.log(employees)
}