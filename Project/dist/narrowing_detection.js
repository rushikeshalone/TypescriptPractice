"use strict";
function detectionType(value) {
    if (typeof value === "number") {
        console.log("The value is a number:", value);
        return value;
    }
    else if (typeof value === "string") {
        console.log("The value is a string:", value);
    }
    else {
        console.log("Unknown type:", value);
    }
    return value + 3;
}
function ProvideId(id) {
    if (!id) {
        console.log("The value is null or undefined:", id);
        return;
    }
    else if (typeof id === "string") {
        console.log("The value is a string:", id);
    }
    else if (typeof id === "number") {
        console.log("The value is a number:", id);
    }
    else {
        console.log("Unknown type:", id);
    }
}
// Do not use these in Production code, as they are not type-safe and can lead to runtime errors.
function PrintAll(str) {
    if (str) {
        if (typeof str === "object") {
            for (const s of str) {
                console.log(s);
            }
        }
        else if (typeof str === "string") {
            console.log(str);
        }
    }
}
//these explae of chatgpt
function isAdminaccount(account) {
    return account.isAdmin !== undefined;
}
//says Explaes Hitesh Sir
function getAccountInfo(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logvalue(x) {
    if (x instanceof Date) {
        console.log("The value is a date:", x);
    }
    else if (typeof x === "string") {
        console.log("The value is a string:", x);
    }
    else {
        console.log("Unknown type:", x);
    }
}
function isFish(animal) {
    return animal.swim !== undefined;
}
function getFood(animal) {
    if (isFish(animal)) {
        animal.swim();
    }
    else if ("fly" in animal) {
        animal.fly();
    }
    else if ("bark" in animal) {
        animal.bark();
    }
}
