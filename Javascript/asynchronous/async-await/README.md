

```markdown
# JavaScript Async/Await – Complete Guide

`async` and `await` are syntactic sugar built on top of Promises that make asynchronous code look and behave more like synchronous code. They simplify error handling and improve readability.

---

## What is async/await?

- **`async`** – Declares a function that returns a Promise.
- **`await`** – Pauses the execution of an `async` function until a Promise is resolved or rejected.

```javascript
async function myFunction() {
  const result = await somePromise();
  console.log(result);
}
```

---

## Syntax

### `async` function declaration
```javascript
async function fetchData() {
  return "data";
}
// Equivalent to:
// function fetchData() {
//   return Promise.resolve("data");
// }
```

### `await` expression
```javascript
const value = await promise;
```

- `await` can only be used **inside** an `async` function.
- It makes the function wait for the Promise to settle, then returns the resolved value or throws the rejection reason.

---

## Basic Example

```javascript
function fetchUserData() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 2000);
  });
}

async function getUserData() {
  const user = await fetchUserData();
  console.log(user); // { id: 1, name: "Alice" }
}

getUserData();
```

---

## Error Handling with try/catch

Handle rejected Promises using `try/catch`:

```javascript
async function getUserData() {
  try {
    const user = await fetchUserData();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}
```

If `fetchUserData()` rejects, the error is caught and logged.

---

## Awaiting Multiple Promises

### Sequential – one after another
```javascript
async function fetchAll() {
  const data1 = await fetchData1(); // waits 1s
  const data2 = await fetchData2(); // then waits 2s
  // total time = 3s
}
```

### Parallel – all at once with `Promise.all`
```javascript
async function fetchAll() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  // total time = max(1s, 2s) = 2s
}
```

---

## Comparison with Promises (`.then`)

**Using Promises:**
```javascript
fetchUserData()
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

**Using async/await:**
```javascript
async function displayUser() {
  try {
    const user = await fetchUserData();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
```

Async/await avoids nested `.then` chains and makes error handling consistent with synchronous code.

---

## Common Pitfalls

### 1. Forgetting `await` inside an async function
```javascript
async function getData() {
  const result = fetchData();   // ❌ result is a Promise, not the resolved value
  console.log(result);          // Promise { <pending> }
}
```
**Fix:** Use `await fetchData()`.

### 2. Using `await` outside an async function
```javascript
const data = await fetchData(); // ❌ SyntaxError
```
**Fix:** Wrap in an async function or use `.then()`.

### 3. No error handling
If you don't wrap `await` in a `try/catch`, rejected Promises will cause the async function to throw an unhandled rejection.

```javascript
async function getData() {
  const data = await fetchData(); // if fetchData rejects, error propagates
}
```

### 4. Loops and async/await
Using `await` inside a loop runs sequentially. For parallel execution, use `Promise.all`.

```javascript
// Sequential (slow)
async function processItems(items) {
  for (let item of items) {
    await processItem(item);
  }
}

// Parallel (fast)
async function processItems(items) {
  const promises = items.map(item => processItem(item));
  await Promise.all(promises);
}
```

---

## Practical Example: Weather App with async/await

```javascript
const API_KEY = "your_api_key";

async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    console.log(`Temperature in ${city}: ${data.main.temp}°C`);
  } catch (error) {
    console.error(error.message);
  }
}

fetchWeather("London");
```

---

## Summary

| Feature          | Description                                          |
|------------------|------------------------------------------------------|
| `async`          | Makes a function return a Promise.                   |
| `await`          | Pauses execution until Promise settles.              |
| Error handling   | Use `try/catch` around `await`.                      |
| Parallelism      | Combine `await` with `Promise.all` for concurrency.  |
| Return value     | `async` function always returns a Promise.           |

Async/await is the preferred way to handle asynchronous operations in modern JavaScript – it's clean, readable, and easy to maintain.

---

## Further Reading

- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [JavaScript.info: Async/await](https://javascript.info/async-await)
```