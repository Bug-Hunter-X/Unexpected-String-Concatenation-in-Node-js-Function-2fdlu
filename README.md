# Unexpected String Concatenation in Node.js Function

This repository demonstrates an uncommon bug in Node.js related to unexpected string concatenation within a function.  The `myFunction` is intended to add two numbers, but it unexpectedly concatenates them as strings when one of the inputs is a string.

The bug is highlighted in `bug.js`, and a solution is provided in `bugSolution.js`.

## Bug Description
The function `myFunction` is designed to add two numbers. However, when one of the arguments is a string, instead of throwing an error or performing type coercion, JavaScript performs string concatenation.

## Solution
The solution in `bugSolution.js` involves explicit type checking before performing the addition operation to ensure both inputs are numbers. If either input is not a number, an error message is displayed, or a default behavior can be implemented (e.g., return 0).
