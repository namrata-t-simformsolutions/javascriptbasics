//abstract class
interface hasEmail{
    email: string;
    
}
abstract class Department implements hasEmail{
    constructor(public name: string, public email:string){
    }
    printName(): void {
        console.log("Department name: "+ this.name);
        console.log("Department email: "+ this.email);
    }

    abstract printMeeting(): void;//must be implemented in derived class
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing","thaker.namrata@gmail.com");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each monday");
    }
    generateReports(): void{
        console.log("Generating Reports...");
    }
}
let department: Department; // you can create reference to an abstrat type
//department = new Department(); cannot create an instance of abstract class
department = new AccountingDepartment();// you can assign non abstract class
department.printName();
department.printMeeting();
//department.generateReports(); //method doesn't exist on declared abstract type


//constructor functions
class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet() {
        return "Hii! "+ this.greeting
    }
}
let greeter: Greeter;
greeter = new Greeter("Namrata Thaker");
console.log(greeter.greet());

//merging interfaces

interface Box {
    height: number;
    weight: number;
}
interface Box {
    scale: number;
}
let box: Box = {height: 5, weight: 10, scale: 6};
console.log(box);


