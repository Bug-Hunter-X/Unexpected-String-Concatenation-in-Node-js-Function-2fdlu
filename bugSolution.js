```javascript
function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Both inputs must be numbers.');
    return 0; // Or handle the error in a different way
  }
  return a + b;
}

console.log(myFunction(5, '5')); //Output: Error: Both inputs must be numbers.
console.log(myFunction(5, 5)); // Output: 10
```