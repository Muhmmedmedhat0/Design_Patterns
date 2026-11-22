const createUser = (firstName, lastName) => ({
  id: crypto.randomUUID(),
  createdAt: Date.now(),
  firstName,
  lastName,
  fullName: `${firstName} ${lastName}`,
});

const user1 = createUser("John", "Doe");
createUser("Sarah", "Doe");
createUser("Lydia", "Hallie");

console.log(user1);
