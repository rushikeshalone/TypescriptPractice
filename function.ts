function addTwo(num: number) {
  return num + 2;
}

addTwo(5); // 7

function getUppdercase(num: string) {
  return num.toUpperCase();
}
getUppdercase("rushikesh"); // RUSHIKESH

function getUserId(userId: number | string) {
  return `User id is ${userId}`;
}
getUserId(123); // User id is 123

function Isactive(isActive: boolean) {
  return isActive ? "User is active" : "User is not active";
}
Isactive(true); // User is active

function signup(
  name: string,
  email: string,
  password: string,
  age: number,
  isActive: boolean
) {
  return `User name is ${name} and email is ${email} and password is ${password} and age is ${age} and isActive is ${isActive}`;
}
signup("rushikesh", "ddd", "123456", 23, true); // User name is rushikesh and email is ddd and password is 123456 and age is 23 and isActive is true

// function type declaration

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

addTwoNumbers(5, 10); // 15

console.log(addTwoNumbers(5, 10));

const heros = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"];

heros.map((hero): string => {
  return hero.toUpperCase();
});

// voide function

function logError(errorMessage: string): void {
  console.log(`Error: ${errorMessage}`);
}

function handleerror(errorMessage: string): never {
  throw new Error(`Error: ${errorMessage}`);
}

export {};
