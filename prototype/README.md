# Prototype Pattern

The Prototype pattern creates new objects by using existing objects or constructors as templates. In JavaScript, classes are backed by a prototype chain, so instances can share methods without duplicating them.

## Key files

- `index.js` defines a `Dog` class and creates several dogs with instance-specific names and ages.
- `example/index.js` defines a `User` class and demonstrates method sharing between two user instances.

## Run

Run the dog example:

```bash
cd prototype
node index.js
```

Run the user example:

```bash
cd prototype/example
node index.js
```

## Behavior

### `Dog`

Each dog instance receives its own `name` and `age` values, while `bark()` and `wagTail()` are inherited from `Dog.prototype`.

### `User`

Each user receives its own personal properties, including `fullName` and `email`. Methods such as `checkLastOnline()`, `sendEmail()`, and `delete()` are shared by every `User` instance.

The comparison `user.delete === user2.delete` returns `true` because both instance methods resolve to the same function on the `User` prototype.
