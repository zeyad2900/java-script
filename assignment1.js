// 1. Convert "123" to number and add 7
const q1 = () => Number("123") + 7;
console.log(q1()); // 130

// 2. Falsy check
const q2 = (value) => (!value ? "Invalid" : value);
console.log(q2(0)); // "Invalid"

// 3. Print odd numbers 1..10 using continue
const q3 = () => {
  const out = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    out.push(i);
  }
  console.log(out.join(", "));
  return out;
};
q3(); // 1, 3, 5, 7, 9

// 4. Filter even numbers
const q4 = (arr) => arr.filter((n) => n % 2 === 0);
console.log(q4([1, 2, 3, 4, 5])); // [2, 4]

// 5. Merge arrays with spread
const q5 = (a, b) => [...a, ...b];
console.log(q5([1, 2, 3], [4, 5, 6])); // [1,2,3,4,5,6]

// 6. Day of week with switch
function q6(day) {
  switch (day) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid day";
  }
}
console.log(q6(2)); // "Monday"

// 7. String lengths with map
const q7 = (arr) => arr.map((s) => s.length);
console.log(q7(["a", "ab", "abc"])); // [1, 2, 3]

// 8. Divisible by 3 and 5
function q8(n) {
  if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
  if (n % 3 === 0) return "Divisible by 3 only";
  if (n % 5 === 0) return "Divisible by 5 only";
  return "Not divisible by 3 or 5";
}
console.log(q8(15)); // "Divisible by both"

// 9. Square (arrow)
const q9 = (n) => n * n;
console.log(q9(5)); // 25

// 10. Destructuring
function q10({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(q10({ name: "John", age: 25 })); // "John is 25 years old"

// 11. Sum of multiple params
function q11(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}
console.log(q11(1, 2, 3, 4, 5)); // 15

// 12. Promise resolving after 3 seconds
function q12() {
  return new Promise((resolve) => setTimeout(() => resolve("Success"), 3000));
}
q12().then(console.log); // "Success" (after 3s)

// 13. Largest number in array
function q13(arr) {
  let max = arr[0];
  for (const n of arr) if (n > max) max = n;
  return max;
}
console.log(q13([1, 3, 7, 2, 4])); // 7

// 14. Object keys
const q14 = (obj) => Object.keys(obj);
console.log(q14({ name: "John", age: 30 })); // ["name", "age"]

// 15. Split string into words
const q15 = (str) => str.split(" ");
console.log(q15("The quick brown fox")); // ["The","quick","brown","fox"]
