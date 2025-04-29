"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5); // 7
function getUppdercase(num) {
    return num.toUpperCase();
}
getUppdercase("rushikesh"); // RUSHIKESH
function getUserId(userId) {
    return "User id is ".concat(userId);
}
getUserId(123); // User id is 123
function Isactive(isActive) {
    return isActive ? "User is active" : "User is not active";
}
Isactive(true); // User is active
function signup(name, email, password, age, isActive) {
    return "User name is ".concat(name, " and email is ").concat(email, " and password is ").concat(password, " and age is ").concat(age, " and isActive is ").concat(isActive);
}
signup("rushikesh", "ddd", "123456", 23, true); // User name is rushikesh and email is ddd and password is 123456 and age is 23 and isActive is true
// function type declaration
function addTwoNumbers(num1, num2) {
    //return num1 + num2;
    return "Hellow";
}
addTwoNumbers(5, 10); // 15
console.log(addTwoNumbers(5, 10)); // Hellow
