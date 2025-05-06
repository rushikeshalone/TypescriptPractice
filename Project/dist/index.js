"use strict";
class User {
    constructor(name, email, age) {
        this.city = "New York";
        this.city2 = "London";
        this.country = "INDIA";
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const RA = new User("RA", "RA@gmail.com", 25);
console.log(RA);
RA.country;
//RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.
// RA.city2 = "Los Angeles"; // Error: Cannot assign to 'city2' because it is a read-only property.
// RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.
//  Professional code
class User1 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.city = "New York";
    }
}
// getters and setters explaes in the below code
class User2 {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._CourseCount = 1;
        this._courseName = "Angular";
        this.city = "New York";
        this.name = name;
        this.email = email;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get AppleEmail() {
        return `Apple ${this.email}`;
    }
    set AppleEmail(email) {
        this.email = email;
    }
    get AppleName() {
        return `Apple ${this.name}`;
    }
    set AppleName(name) {
        this.name = name;
    }
    get CourseCount() {
        return this._CourseCount;
    }
    set CourseCount(count) {
        if (count <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._CourseCount = count;
    }
    get courseName() {
        return this._courseName;
    }
    set courseName(name) {
        if (name.length < 3) {
            throw new Error("Course name should be more than 3 characters");
        }
        this._courseName = name;
    }
}
class subUser extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCoursename() {
        this._courseName = "React"; // we can access the setter method of the parent class
    }
}
const RA1 = new User2("RA", "Rushi@gmail.com");
// RA1.deleteToken(); // Error: Property 'deleteToken' is private and only accessible within class 'User2'.
