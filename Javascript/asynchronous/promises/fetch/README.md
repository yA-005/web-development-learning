

```markdown
# JavaScript `fetch()` – A Modern Guide

The `fetch()` API is a modern, promise‑based way to make network requests (like getting data from an API) directly in the browser or Node.js (with additional packages). It replaces the older `XMLHttpRequest` and offers a cleaner, more flexible syntax.

## Basic Syntax

```javascript
fetch(url, options)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle network errors
  });
```

- `url` – the endpoint you want to request.
- `options` (optional) – an object that can include method (`GET`, `POST`, etc.), headers, body, etc.

## Getting Started

The simplest `GET` request:

```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())    // parse JSON body
  .then(data => console.log(data))      // work with the data
  .catch(error => console.error("Error:", error));
```

## Understanding the Response

The `fetch()` promise resolves to a **`Response` object**. It does **not** automatically throw an error on HTTP status codes like 404 or 500 – you must check `response.ok`.

Common methods on the `Response` object:
- `.json()` – parses the body as JSON and returns a promise.
- `.text()` – returns the body as plain text.
- `.blob()` – returns the body as a Blob (for images, etc.).

### Example with status check

```javascript
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Fetch failed:", error));
```

## Chaining Promises

Because `.json()` returns a promise, you can chain multiple `.then()` calls:

```javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    // process data
    return someOtherFunction(data);
  })
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## Using Async/Await

For cleaner, synchronous‑looking code, use `async/await`:

```javascript
async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
getData();
```

## Common Options for POST Requests

```javascript
fetch("https://api.example.com/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John", age: 30 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

## Example with DummyJSON API

Here’s a practical example using the [DummyJSON](https://dummyjson.com) test API:

```javascript
const url = "https://dummyjson.com/products/1";

fetch(url)
  .then(response => response.json())
  .then(product => {
    console.log(product.title);        // "Essence Mascara Lash Princess"
    console.log(product.price);        // 9.99
    console.log(product.brand);        // "Essence"
  })
  .catch(err => console.error(err));
```

## Pitfalls & Best Practices

- **Always handle errors** – Use `.catch()` or `try/catch` with `async/await`.
- **Check `response.ok`** – `fetch` only rejects on network failures, not HTTP error statuses.
- **Don’t forget to return the promise** in `.then()` chains if you want to continue the chain.
- **Data is only available inside the `.then()` or after `await`** – it’s asynchronous, so you cannot use the result immediately after `fetch()`.
- **Use `async/await` for readability** – but be aware that it still works with promises under the hood.

## Summary

- `fetch()` returns a promise that resolves to a `Response` object.
- Parse the body with `.json()`, `.text()`, etc. – these methods also return promises.
- Always handle errors, both network and HTTP status.
- Prefer `async/await` for cleaner code.
- Use chaining or `await` to work with the actual data once the promise resolves.

Now you’re ready to fetch data from any API with confidence!
```