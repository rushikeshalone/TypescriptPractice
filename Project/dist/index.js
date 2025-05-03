"use strict";
class User {
    constructor(name, email, age) {
        this.city = "New York";
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const RA = new User("RA", "RA@gmail.com", 25);
// RA.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.
