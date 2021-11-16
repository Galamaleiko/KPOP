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
    markPrize: PrizeLogger
}

interface PrizeLogger {
    (text: string): void
}

interface Person {
    name: string
    email: string
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string
    assistCustomer(custName: string): void
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

function printWorker(worker: Worker) {
    console.log(worker.name + ` ` + worker.surname + ` got salary ` + worker.salary)
}

function LPR(text: string) {
    console.log(`text is ${text}`)
}

let logPrize: PrizeLogger = LPR
logPrize(`hey`)

let favouriteAuthor: Author = { name: `Bonka`, email: `Donkas@gmail.ua`, numBooksPublished: 15 }
//let favouriteLibrarian: Librarian = {
//    name: `Tom`, email: `TomHanks@yahoo.com`, department: `Cringe`, assistCustomer: function func(cust: string) {
//        console.log(cust);
//    }
//}

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

let favouriteLibrarian: Librarian = new UniversityLibrarian();
favouriteLibrarian.name = "John"
favouriteLibrarian.assistCustomer("Dohn")

class ReferenceItem {
    /*title: string
    year: number
    constructor(newTitle: string, newYear: number) {
        console.log(`Creating a new ReferenceItem.....................`);
        this.title = newTitle
        this.year = newYear
    }*/

    constructor(public title: string, protected year: number) { }

    private _publisher: string;
    department: string = `Cringe`

    public get publisher(): string {
        return this._publisher.toUpperCase();
    }
    public set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year} by ${this.department} department`);
    }
}

let ref: ReferenceItem = new ReferenceItem(`Harry Potter`, 1942)
ref.printItem()

ref.publisher = `Ron Whisley`
console.log(ref.publisher);

class Encyclopedia extends ReferenceItem {
    constructor(public title: string, protected year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem()
        console.log(`Edition: ${this.edition}, ${this.year}`)
    }
}

let refBook: Encyclopedia = new Encyclopedia(`JavaScript for Dummies`, 1998, 8)
refBook.printItem()