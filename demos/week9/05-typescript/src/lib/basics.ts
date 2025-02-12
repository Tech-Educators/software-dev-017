//The TypeScript extension is .ts
//We use .tsx for components

//variables
const myName: string = "Manny";

console.log(myName);

const myAge: number = 87;

const isSunny: boolean = false;

//=========================================================
//arrays
const favouriteFood: string[] = ["pizza", "sushi", "matcha tea"];

const favouriteFood2: Array<string> = ["pizza", "sushi", "matcha tea"];

const favouriteThings: (number | string | boolean)[] = [
  "the sun",
  65,
  true,
  "walks on the beach",
  "whiskers on kittens",
];

const favouriteThings: Array<number | string | boolean> = [
  "the sun",
  65,
  true,
  "walks on the beach",
  "whiskers on kittens",
];

//============================================================
//objects --> each property might have a different data type and we are using the same symbol :
// const staff = {
//   staffName: "Manny",
//   staffLocation: "Norwich",
//   staffRole: "instructor",
//   staffStartingYear: 2023,
// };

// const staff: {
//   staffName: string;
//   staffLocation: string;
//   staffRole: string;
//   staffStartingYear: number;
// } = {
//   staffName: "Manny",
//   staffLocation: "Norwich",
//   staffRole: "instructor",
//   staffStartingYear: 2023,
// };

type staffType = {
  staffName: string;
  staffLocation: string;
  staffRole: string;
  staffStartingYear: number;
};

//we could also stored all our types separately and import them when we need them
// import { staffType } from "@/types/staffTypes";

const staff1: staffType = {
  staffName: "Manny",
  staffLocation: "Norwich",
  staffRole: "instructor",
  staffStartingYear: 2023,
};

const staff2: staffType = {
  staffName: "Joe",
  staffLocation: "Norwich",
  staffRole: "TA",
  staffStartingYear: 2024,
};

//========================================================
//functions
function add(a: number, b: number) {
  return a + b;
}

//the arguments type needs to match the parameters type
add(5, 7);

//===========================================================
//type inference
//If we do not specify the type of a value, TypeScript will infer the type any
//! Do not overuse type any
const myMysteriousValue: any = "do not overuse any";

//this is type any
let myVariable;

//If we do not specify a type, TypeScript will infer the type based on the first value assigned
let myFavouriteItem = "ball";
myFavouriteItem = 7;

console.log(myFavouriteItem);
