enum Category {
    BA = "Business Analyst",
    Dev = "Developer",
    Des = "Designer",
    QA = "Quality Assurance",
    SM = "Scrum Master"
}

interface Worker {
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    category: Category
}

function getAllworkers() {
    let workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.SM, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Des, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.BA, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.QA, id: 4 }
    ]
    return workers;
}

function getWorkersByID(id: number): Worker {
    return getAllworkers().find(e => e.id == id)
}
