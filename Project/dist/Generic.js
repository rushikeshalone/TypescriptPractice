"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const score = [1, 2, 3, 4, 5];
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
const Score = []; // Array of numbers
const Score2 = []; // Array of strings
function identityOne(val) {
    return val;
}
// any key word do not use  typescipt not know which type is used
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
console.log(identityThree(15));
console.log(identityThree("New Scipt")); // string
console.log(identityOne(true)); // boolean
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4, 5]);
console.log(numArray); // [1, 2, 3, 4, 5]
//indentityThree<Bootle>({}); // Bootle
function getSerchProducts(products, query, key) {
    return products.filter((product) => product[key] === query);
}
function getSerchInput(Product) {
    return Product[3];
}
const getDatabsevalue = (data) => {
    return data;
};
function fetchApiData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    });
}
// Update the example usage with the interface
(() => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = "https://fakestoreapi.com/products";
    const products = yield fetchApiData(apiUrl); // Use Product[] as the type
    console.log("Rushi", products);
}))();
function anotherFunction(Valone, valtwo) {
    return {
        Valone,
        valtwo,
    };
}
anotherFunction("3", 4);
function secoundanotheruser(Valone, valtwo) {
    return {
        Valone,
        valtwo,
    };
}
secoundanotheruser("3", { id: "1", name: "Rushi", age: 23 });
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(item) {
        this.cart.push(item);
    }
}
const quiz = new sellable();
quiz.addToCart({ name: "Rushi", type: "Quiz" });
console.log(quiz.cart); // [{ name: "Rushi", type: "Quiz" }]
