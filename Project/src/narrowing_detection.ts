function detectionType(value: number | string) {
  if (typeof value === "number") {
    console.log("The value is a number:", value);
    return value;
  } else if (typeof value === "string") {
    console.log("The value is a string:", value);
  } else {
    console.log("Unknown type:", value);
  }
  return value + 3;
}

function ProvideId(id: string | null) {
  if (!id) {
    console.log("The value is null or undefined:", id);
    return;
  } else if (typeof id === "string") {
    console.log("The value is a string:", id);
  } else if (typeof id === "number") {
    console.log("The value is a number:", id);
  } else {
    console.log("Unknown type:", id);
  }
}

// Do not use these in Production code, as they are not type-safe and can lead to runtime errors.

function PrintAll(str: string | string[] | null) {
  if (str) {
    if (typeof str === "object") {
      for (const s of str) {
        console.log(s);
      }
    } else if (typeof str === "string") {
      console.log(str);
    }
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

//these explae of chatgpt
function isAdminaccount(account: User | Admin): account is Admin {
  return (account as Admin).isAdmin !== undefined;
}

//says Explaes Hitesh Sir
function getAccountInfo(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function logvalue(x: Date | string) {
  if (x instanceof Date) {
    console.log("The value is a date:", x);
  } else if (typeof x === "string") {
    console.log("The value is a string:", x);
  } else {
    console.log("Unknown type:", x);
  }
}

type Fish = {
  swim: () => void;
};
type Bird = {
  fly: () => void;
};
type Dog = {
  bark: () => void;
};

type Animal = Fish | Bird | Dog;

function isFish(animal: Animal): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function getFood(animal: Animal) {
  if (isFish(animal)) {
    animal.swim();
  } else if ("fly" in animal) {
    animal.fly();
  } else if ("bark" in animal) {
    animal.bark();
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}
type Shape = Circle | Square | Rectangle | Triangle;

function getArea(shape: Shape): number {
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
      const _exhaustiveCheck: never = shape; // This will cause a compile-time error if a new shape is added without updating the switch statement
      return _exhaustiveCheck;
  }
}
function getArea2(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.sideLength ** 2;
  } else if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  } else if (shape.kind === "triangle") {
    return (shape.base * shape.height) / 2;
  } else {
    const _exhaustiveCheck: never = shape; // This will cause a compile-time error if a new shape is added without updating the if-else statements
    return _exhaustiveCheck;
  }
}
