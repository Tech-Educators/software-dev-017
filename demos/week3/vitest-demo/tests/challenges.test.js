import { test, expect } from "vitest";
//We import these specific parts of the Vitest package, rather than the whole package. This is called DESTRUCTURING.
import { sum } from "./challenges.js";
// We import the sum function specifically from the challenges.js file, using DESTRUCTURING

test("sum", function () {
  //We will run the sum function using the values a = 2 and b = 1
  const result = sum(2, 1);
  // We expect the output of the sum function to be 3!
  const expected = 3;
  // The following line of code used Vitest object methods to compare the result of the sum function to the expected value that we defined:
  expect(result).toBe(expected);
});
