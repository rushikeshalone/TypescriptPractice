const User = {
  name: "rushikesh",
  isPaid: true,
  email: "rushikesh@gmail.com",
  isActive: true,
};

function Createuser({ name: string, isPaid: boolean }) {}

Createuser(User);

Createuser({ name: "rushikesh", isPaid: false });

function CreateCourse(): { name: string; price: number; isPaid: boolean } {
  return { name: "reactJs", price: 1000, isPaid: true };
}

//type alias code

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function getuserDetails(User: User): string {
  return `User name is ${User.name} and email is ${User.email} and isActive is ${User.isActive}`;
}

// Read only and optional properties
type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  age?: number; // optional property
};

let myUserReadonly: User1 = {
  _id: "123456",
  name: "rushikesh",
  email: "rushi@GMAIL.COM",
  isActive: true,
};

export {};
