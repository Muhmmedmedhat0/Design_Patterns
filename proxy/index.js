// Proxy is a special object that allows you to intercept and customize operations performed on another object, such as property lookup, assignment, enumeration, function invocation, etc. It can be used to add custom behavior to objects, such as validation, logging, or access control.

const person = {
  name: "Jhon Doe",
  age: 42,
  email: "example@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return target[prop];
  },
  set: (target, prop, newValue) => {
    target[prop] = newValue;
    return true;
  },
});

console.log(personProxy.age);
console.log((personProxy.age += 1));

//  refactor proxy with reflect
const reflectPersonProxy = new Proxy(person, {
  get: (target, prop) => {
    return Reflect.get(target, prop);
  },
  set: (target, prop, newValue) => {
    return Reflect.set(target, prop, newValue);
  },
});
console.log(reflectPersonProxy.age);
console.log((reflectPersonProxy.age += 1));
