let score: number | string | boolean = 33;

type User = {
  name: string;
  id: number;
};

type Admin = {
  name: string;
  id: number;
  role: string;
};

type superadmin = {
  name: string;
  id: number;
  role: string;
  permissions: string[];
};
type User1 = User | Admin | superadmin; // union type
type User2 = User & Admin & superadmin; // intersection type
type User3 = User | Admin; // union type
type User4 = User & Admin; // intersection type
type User5 = User | Admin | superadmin; // union type
type User6 = User & Admin & superadmin; // intersection type

let Rushikesh: User = { name: "Rushikesh", id: 1 };

function getDBId(id: number | string) {
  // this will give error because id can be number or string
  if (typeof id === "string") {
    // this will give error because id can be number or string
    console.log(id.toUpperCase()); // this will give error because id can be number or string
  }
  // do some database operations
  console.log(`DB id is ${id}`);
}

// array of union type

const data: number[] = [1, 2, 3, 4, 5]; // array of number
const data1: string[] = ["1", "2", "3", "4", "5"]; // array of string
const data2: (number | string)[] = [1, "2", 3, "4", 5]; // array of number and string

const type: string | number = 1; // type is string or number
