var Category;
(function (Category) {
    Category["BA"] = "Business Analyst";
    Category["Dev"] = "Developer";
    Category["Des"] = "Designer";
    Category["QA"] = "Quality Assurance";
    Category["SM"] = "Scrum Master";
})(Category || (Category = {}));
function getAllworkers() {
    var workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.SM, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Des, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.BA, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.QA, id: 4 }
    ];
    return workers;
}
function getWorkersByID(id) {
    return getAllworkers().find(function (e) { return e.id == id; });
}
