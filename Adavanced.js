var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, email) {
        this.name = name;
        this.email = email;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
        console.log("Department name: " + this.email);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing", "thaker.namrata@gmail.com") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each monday");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating Reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // you can create reference to an abstrat type
//department = new Department(); cannot create an instance of abstract class
department = new AccountingDepartment(); // you can assign non abstract class
department.printName();
department.printMeeting();
//department.generateReports(); //method doesn't exist on declared abstract type
//constructor functions
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hii! " + this.greeting;
    };
    return Greeter;
}());
var greeter;
greeter = new Greeter("Namrata Thaker");
console.log(greeter.greet());
var box = { height: 5, weight: 10, scale: 6 };
console.log(box);
