# Factory Pattern

The Factory pattern centralizes object creation in reusable functions. It helps examples create objects with a consistent shape without duplicating object-literal code.

## Key files

- `index.js` creates user objects with an ID, creation timestamp, first name, last name, and full name.
- `example/books.js` exports a factory for book objects and five example books.
- `example/index.js` imports all book exports and logs them.

## Run

From the repository root, run the user factory:

```bash
cd factory
node index.js
```

Run the book factory example:

```bash
cd factory/example
node index.js
```

## API

### `createUser(firstName, lastName)`

Creates and returns an object containing:

- `id`
- `createdAt`
- `firstName`
- `lastName`
- `fullName`

### `createBook(title, author, isbn)`

Creates and returns an object containing:

- `title`
- `author`
- `isbn`
