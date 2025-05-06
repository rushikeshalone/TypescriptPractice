const score: Array<number> = [1, 2, 3, 4, 5];

// const score2: Array<string> = ["1", "2", "3", "4", "5"];
// const score3: Array<boolean> = [true, false, true, false, true];
// const score4: Array<any> = [1, "2", true, 4, false]; // any type
// const score5: Array<unknown> = [1, "2", true, 4, false]; // unknown type
// const score6: Array<never> = []; // never type
// const score7: Array<null> = [null, null, null, null, null]; // null type
// const score8: Array<undefined> = [undefined, undefined, undefined]; // undefined type
// const score9: Array<bigint> = [1n, 2n, 3n, 4n, 5n]; // bigint type
// const score10: Array<symbol> = [Symbol("1"), Symbol("2"), Symbol("3")]; // symbol type
// const score11: Array<Function> = [function () {}, () => {}]; // function type
// const score12: Array<RegExp> = [/1/, /2/, /3/]; // RegExp type
// const score13: Array<Date> = [new Date(), new Date(), new Date()]; // Date type
// const score14: Array<Error> = [new Error("1"), new Error("2")]; // Error type
// const score15: Array<Set<number>> = [new Set([1, 2]), new Set([3, 4])]; // Set type
// const score16: Array<Map<string, number>> = [
//   new Map([["1", 1]]),
//   new Map([["2", 2]]),
// ]; // Map type
// const score17: Array<WeakSet<object>> = [new WeakSet(), new WeakSet()]; // WeakSet type
// const score18: Array<WeakMap<object, object>> = [new WeakMap(), new WeakMap()]; // WeakMap type
// const score19: Array<Promise<string>> = [
//   Promise.resolve("1"),
//   Promise.resolve("2"),
// ]; // Promise type
// const score20: Array<AsyncFunction> = [async () => {}, async function () {}]; // AsyncFunction type
// const score21: Array<Iterable<number>> = [new Set([1, 2]), new Map([["1", 1]])]; // Iterable type
// const score22: Array<Iterator<number>> = [
//   new Set([1, 2]).values(),
//   new Map([["1", 1]]).values(),
// ]; // Iterator type
// const score23: Array<AsyncIterable<number>> = [
//   async function* () {},
//   async function* () {},
// ]; // AsyncIterable type
// const score24: Array<AsyncIterator<number>> = [
//   async function* () {},
//   async function* () {},
// ]; // AsyncIterator type

// const score25: Array<Generator<number>> = [function* () {}, function* () {}]; // Generator type
// const score26: Array<AsyncGenerator<number>> = [
//   async function* () {},
//   async function* () {},
// ]; // AsyncGenerator type

const Score: Array<number> = []; // Array of numbers
const Score2: Array<string> = []; // Array of strings

function identityOne(val: boolean | string): boolean | string {
  return val;
}

// any key word do not use  typescipt not know which type is used
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

console.log(identityThree(15));
console.log(identityThree("New Scipt")); // string
console.log(identityOne(true)); // boolean

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
const numArray = getArray<number>([1, 2, 3, 4, 5]);
console.log(numArray); // [1, 2, 3, 4, 5]

interface Bootle {
  brand: string;
  type: number;
  color: string;
}

//indentityThree<Bootle>({}); // Bootle

function getSerchProducts<T>(products: T[], query: string, key: keyof T): T[] {
  return products.filter((product) => product[key] === query);
}

function getSerchInput<T>(Product: T[]): T {
  return Product[3];
}

const getDatabsevalue = <T>(data: T[]): T[] => {
  return data;
};

async function fetchApiData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Example usage:
// (async () => {
//   const apiUrl = "https://fakestoreapi.com/products";
//   const products = await fetchApiData<any[]>(apiUrl); // Replace `any[]` with a proper type if available
//   console.log("Rushi", products);
// })();

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Update the example usage with the interface
(async () => {
  const apiUrl = "https://fakestoreapi.com/products";
  const products = await fetchApiData<Product[]>(apiUrl); // Use Product[] as the type
  console.log("Rushi", products);
})();

function anotherFunction<T, U extends number>(Valone: T, valtwo: U): object {
  return {
    Valone,
    valtwo,
  };
}

anotherFunction("3", 4);

interface Database {
  id: string;
  name: string;
  age: number;
}

function secoundanotheruser<T, U extends Database>(
  Valone: T,
  valtwo: U
): object {
  return {
    Valone,
    valtwo,
  };
}

secoundanotheruser("3", { id: "1", name: "Rushi", age: 23 });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];
  addToCart(item: T) {
    this.cart.push(item);
  }
}

const quiz = new sellable<Quiz>();
quiz.addToCart({ name: "Rushi", type: "Quiz" });

console.log(quiz.cart); // [{ name: "Rushi", type: "Quiz" }]
