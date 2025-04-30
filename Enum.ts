const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

const seat: number = 0;

if (seat === AISLE) {
  console.log("aisle seat");
}
if (seat === MIDDLE) {
  console.log("middle seat");
}
if (seat === WINDOW) {
  console.log("window seat");
}

// enum is a way to define a set of named constants

enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const RASeat = SeatChoice.AISLE; // 0
