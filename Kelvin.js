// Kelvin.js

function multiplyAll(...numbers) {
  if (numbers.length === 0) return 0;

  return numbers.reduce((product, num) => product * num, 1);
}

// Test
console.log(multiplyAll(2, 3, 4)); 
console.log(multiplyAll(5, 10));   
