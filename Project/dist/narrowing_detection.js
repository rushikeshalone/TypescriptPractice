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
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return (shape.base * shape.height) / 2;
        default:
            const _exhaustiveCheck = shape; // This will cause a compile-time error if a new shape is added without updating the switch statement
            return _exhaustiveCheck;
    }
}
function getArea2(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.sideLength ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else if (shape.kind === "triangle") {
        return (shape.base * shape.height) / 2;
    }
    else {
        const _exhaustiveCheck = shape; // This will cause a compile-time error if a new shape is added without updating the if-else statements
        return _exhaustiveCheck;
    }
}
