function getAllworkers() {
    var workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.SM, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Des, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.BA, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.QA, id: 4 }
    ];
    return workers;
}
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllworkers(); }
    console.log("Number of workers - " + workers.length);
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        console.log(worker.name + " " + worker.surname + " " + (worker.available ? " - Available" : " - Unavailable"));
    }
}
var Category;
(function (Category) {
    Category["BA"] = "Business Analyst";
    Category["Dev"] = "Developer";
    Category["Des"] = "Designer";
    Category["QA"] = "Quality Assurance";
    Category["SM"] = "Scrum Master";
})(Category || (Category = {}));
function getWorkersnameByCategory(Cat) {
    if (Cat === void 0) { Cat = Category.Des; }
    var surnames = [];
    for (var _i = 0, _a = getAllworkers(); _i < _a.length; _i++) {
        var worker = _a[_i];
        if (worker.Category == Cat) {
            surnames.push(worker.surname);
        }
    }
    return surnames;
}
function logWorkersNames(names) {
    console.log(names);
}
function getWorkersByID(id) {
    return getAllworkers().find(function (e) { return e.id == id; });
    //return (worker.name + ` ` + worker.surname + `, ` + worker.salary)
}
function createCustomerID(name, id) {
    return name + " " + id;
}
var idGenerator = function (name, id) { return name + " " + id; };
var createCustomer = function (name, age, city) {
    console.log("name: " + name + (age ? ", age: " + age : "") + (city ? ", city: " + city : ""));
};
function checkoutWorkers(customer, workerIDs) {
    var result = [];
    workerIDs.forEach(function (Wid) {
        var worker = getWorkersByID(Wid);
        if (worker.available) {
            result.push(worker.name + " " + worker.surname);
        }
    });
    return result;
    console.log(customer);
}
console.log("==================Task1===================="); // Реалізуйте функцію logFirstAvailable (), яка приймає масив робітників в 
console.log(logFirstAvailable()); // якості параметра і виводить в консоль: a. кількість робітників в масиві
// b. Ім’я та прізвище доступного робітника
console.log("==================Task2===================="); //Реалізуйте функцію getWorkersNamesByCategory (), яка на вхід буде отримувати
console.log(getWorkersnameByCategory(Category.BA)); //категорію і повертати масив прізвищ, які належать вказаній категорії
console.log("==================Task3===================="); // Реалізуйте функцію logWorkersNames (), яка приймає масив рядків 
console.log(logWorkersNames(getWorkersnameByCategory(Category.QA))); // і виводить його в консолі
console.log("==================Task4===================="); // Виведіть name та surname робітників з категорії Developer, 
getAllworkers().forEach(function (worker) {
    if (worker.Category = Category.Dev) {
        console.log(worker.name + " " + worker.surname);
    }
});
console.log("==================Task5===================="); // Створіть функцію getWorkerByID (), яка приймає id  робітника і повертає 
console.log(getWorkersByID(2).name + " " + getWorkersByID(2).surname + ", " + getWorkersByID(2).salary); // його ім’я та прізвище робітника та його заробітну плату
var myID = createCustomerID("Ann", 10); // і його ідентифікатор (id: number) і повертає конкатенацію цих значень у вигляді рядка.
console.log(myID); // Оголосіть змінну myID строкового типу і викличте функцію зі значеннями Ann, 10
idGenerator = createCustomerID;
idGenerator("Exeren", 13);
console.log("==================Task6====================");
console.log(createCustomer("Serega"));
console.log(createCustomer("Serega", 19));
console.log(createCustomer("Serega", 19, "Techno-City IF"));
console.log("==================Task7====================");
console.log(getWorkersnameByCategory());
console.log("==================Task8====================");
var myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(function (worker) { return console.log(worker); });
