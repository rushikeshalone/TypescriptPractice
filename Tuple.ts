const User: string[] = ["RA"];

const User1: (number | string)[] = [1, "RA"];

let tUser: [string, number, boolean];

tUser = ["RA", 1, true]; // tuple type

type UserTuple = [number, string];

const newUser: UserTuple = [1, "RA"];

newUser.push(2); // this will give error because tuple type can only have 2 elements
newUser.push("RA"); // this will give error because tuple type can only have 2 elements
