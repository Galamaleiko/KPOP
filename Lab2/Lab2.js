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
function printWorker(worker) {
    console.log(worker.name + " " + worker.surname + " got salary " + worker.salary);
}
function LPR(text) {
    console.log("text is " + text);
}
var logPrize = LPR;
logPrize("hey");
var favouriteAuthor = { name: "Bonka", email: "Donkas@gmail.ua", numBooksPublished: 15 };
//let favouriteLibrarian: Librarian = {
//    name: `Tom`, email: `TomHanks@yahoo.com`, department: `Cringe`, assistCustomer: function func(cust: string) {
//        console.log(cust);
//    }
//}
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
var favouriteLibrarian = new UniversityLibrarian();
favouriteLibrarian.name = "John";
favouriteLibrarian.assistCustomer("Dohn");
var ReferenceItem = /** @class */ (function () {
    /*title: string
    year: number
    constructor(newTitle: string, newYear: number) {
        console.log(`Creating a new ReferenceItem.....................`);
        this.title = newTitle
        this.year = newYear
    }*/
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        this.department = "Cringe";
    }
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: false,
        configurable: true
    });
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + " by " + this.department + " department");
    };
    return ReferenceItem;
}());
var ref = new ReferenceItem("Harry Potter", 1942);
ref.printItem();
ref.publisher = "Ron Whisley";
console.log(ref.publisher);
