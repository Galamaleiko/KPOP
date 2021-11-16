function getAllworkers() {
    let workers = [
        { name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, Category: Category.SM, id: 1 },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, Category: Category.Des, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, Category: Category.BA, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, Category: Category.QA, id: 4 }
    ]
    return workers;
}

function logFirstAvailable(workers: any[] = getAllworkers()): void {
    console.log(`Number of workers - ${workers.length}`)

    for (var worker of workers) {

        console.log(worker.name + ` ` + worker.surname + ` ` + (worker.available ? ` - Available` : ` - Unavailable`))
    }
}

enum Category {
    BA = "Business Analyst",
    Dev = "Developer",
    Des = "Designer",
    QA = "Quality Assurance",
    SM = "Scrum Master"
}

function getWorkersnameByCategory(Cat: any = Category.Des): string[] {
    let surnames: Array<string> = [];

    for (var worker of getAllworkers()) {
        if (worker.Category == Cat) {
            surnames.push(worker.surname)
        }
    }

    return surnames;
}

function logWorkersNames(names: string[]): void {
    console.log(names)

}

function getWorkersByID(id: number) {
    return getAllworkers().find(e => e.id == id)
    //return (worker.name + ` ` + worker.surname + `, ` + worker.salary)
}

function createCustomerID(name: string, id: number): string {
    return name + ` ` + id
}

let idGenerator = (name: string, id: number): string => { return name + ` ` + id };

let createCustomer = (name: string, age?: number, city?: string) => {
    console.log(`name: ${name}` + (age ? `, age: ${age}` : ``) + (city ? `, city: ${city}` : ``))
}

function checkoutWorkers(customer: string, workerIDs: number[]) {

    let result: Array<string> = []
    workerIDs.forEach(Wid => {

        let worker = getWorkersByID(Wid)
        if (worker.available) {

            result.push(worker.name + ` ` + worker.surname)
        }
    });
    return result
    console.log(customer)
}

console.log(`==================Task1====================`)   // Реалізуйте функцію logFirstAvailable (), яка приймає масив робітників в 
console.log(logFirstAvailable())                             // якості параметра і виводить в консоль: a. кількість робітників в масиві
// b. Ім’я та прізвище доступного робітника

console.log(`==================Task2====================`)   //Реалізуйте функцію getWorkersNamesByCategory (), яка на вхід буде отримувати
console.log(getWorkersnameByCategory(Category.BA))           //категорію і повертати масив прізвищ, які належать вказаній категорії

console.log(`==================Task3====================`)   // Реалізуйте функцію logWorkersNames (), яка приймає масив рядків 
console.log(logWorkersNames(getWorkersnameByCategory(Category.QA))) // і виводить його в консолі

console.log(`==================Task4====================`)   // Виведіть name та surname робітників з категорії Developer, 
getAllworkers().forEach(worker => {                          // використовуючи forEach і стрілочну функцію
    if (worker.Category = Category.Dev) {
        console.log(worker.name + ` ` + worker.surname)
    }
});

console.log(`==================Task5====================`)   // Створіть функцію getWorkerByID (), яка приймає id  робітника і повертає 
console.log(getWorkersByID(2).name + ` ` + getWorkersByID(2).surname + `, ` + getWorkersByID(2).salary)// його ім’я та прізвище робітника та його заробітну плату

let myID: string = createCustomerID(`Ann`, 10)      // і його ідентифікатор (id: number) і повертає конкатенацію цих значень у вигляді рядка.
console.log(myID)                                           // Оголосіть змінну myID строкового типу і викличте функцію зі значеннями Ann, 10

idGenerator = createCustomerID
idGenerator(`Exeren`, 13)

console.log(`==================Task6====================`)
console.log(createCustomer(`Serega`))
console.log(createCustomer(`Serega`, 19))
console.log(createCustomer(`Serega`, 19, "Techno-City IF"))

console.log(`==================Task7====================`)
console.log(getWorkersnameByCategory())

console.log(`==================Task8====================`)
let myWorkers = checkoutWorkers('Ann', [1, 2, 4]);
myWorkers.forEach(worker => console.log(worker))