# Assignment 1 - Part 2: Essay Questions

## 1. forEach vs for...of

`forEach` is an array method that calls a callback for each element. `for...of` is a loop statement that iterates over any iterable (arrays, strings, Maps, Sets, generators).

| | `forEach` | `for...of` |
|---|---|---|
| Works on | Arrays (also Map/Set via their own `forEach`) | Any iterable |
| `break` / `continue` | Not supported (can't stop early) | Supported |
| `return` | Only exits the current callback | Exits the enclosing function |
| `await` inside | Doesn't wait; callbacks fire without being awaited | Works sequentially inside `async` functions |
| Return value | `undefined` | None (it's a statement) |

```js
[1, 2, 3].forEach((n) => console.log(n));

for (const n of [1, 2, 3]) {
  if (n === 2) continue;
  console.log(n); // 1, 3
}
```

Use `forEach` for simple side effects on every element of an array. Use `for...of` when you need `break`/`continue`/`return`, need to use `await` sequentially, or are iterating something other than an array (a string, Set, Map).

## 2. Hoisting and the Temporal Dead Zone (TDZ)

**Hoisting** is JavaScript's behavior of moving declarations to the top of their scope during the creation phase, before code runs.

- `var` is hoisted and initialized as `undefined`.
- Function declarations are hoisted completely (name and body).
- `let`, `const` and `class` are hoisted but **not initialized**.

```js
console.log(a); // undefined
var a = 5;

sayHi(); // "Hi" - works
function sayHi() { console.log("Hi"); }
```

The **Temporal Dead Zone** is the period from the start of a scope until a `let`/`const` declaration is executed. Accessing the variable in that period throws a `ReferenceError`.

```js
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

The TDZ helps catch bugs from using variables before they are defined.

## 3. `==` vs `===`

- `==` (loose equality) compares values **after type coercion**.
- `===` (strict equality) compares value **and type** with no coercion.

```js
5 == "5";            // true  (string converted to number)
5 === "5";           // false (different types)
0 == false;          // true
0 === false;         // false
null == undefined;   // true
null === undefined;  // false
NaN === NaN;         // false
```

Prefer `===` because it is predictable and avoids bugs from implicit coercion.

## 4. try-catch and async operations

`try` wraps code that might throw. If an error occurs, execution jumps to `catch`, which receives the error object. An optional `finally` block always runs afterward (e.g. for cleanup).

```js
try {
  JSON.parse("{bad json");
} catch (err) {
  console.log("Error:", err.message);
} finally {
  console.log("Done");
}
```

It matters for async code because errors in a Promise happen later, outside the normal call stack, so a plain `try-catch` around a Promise-returning call won't catch its rejection. With `async/await`, `await` turns a rejected promise into a thrown error, so `try-catch` works:

```js
async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    if (!res.ok) throw new Error("Request failed");
    return await res.json();
  } catch (err) {
    console.error(err.message); // handle network/parse errors
  }
}
```

Without it, a failed request produces an unhandled promise rejection that can crash a Node app or leave the UI in a broken state.

Without async/await, the equivalent is `.catch()`: `fetch(url).then(...).catch(handleError)`.

## 5. Type conversion vs coercion

Both change a value from one type to another.

- **Type conversion** (explicit / type casting): the developer does it on purpose.
- **Type coercion** (implicit): JavaScript does it automatically when operators or comparisons mix types.

```js
// Conversion (explicit)
Number("42");     // 42
String(123);      // "123"
Boolean("hello"); // true
parseInt("10px"); // 10

// Coercion (implicit)
"5" + 2;          // "52"  (number coerced to string)
"5" - 2;          // 3     (string coerced to number)
true + 1;         // 2
if ("hello") {}   // string coerced to boolean true
```
