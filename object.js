//1.Object.assign()

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);

console.log(result); // Output: { a: 1, b: 3, c: 4 }

//2.Object.create()
const person = {
    name: 'John',
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const john = Object.create(person);
  john.name = 'John Doe';
  john.greet(); // Output: Hello, John Doe!
  
  //3.Object.defineProperty()
  const obj = {};
  Object.defineProperty(obj, 'property1', {
    value: 42,
    writable: true
  });
  
  console.log(obj.property1); // Output: 42
  
  //4.Object.defineProperties()
  const obj1 = {};
  Object.defineProperties(obj1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  });
  
  console.log(obj1.property1); // Output: 42
  
  //5.Object.entries()
  const obj2 = { a: 1, b: 2, c: 3 };
  const entries = Object.entries(obj2);
  
  console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]
  
  //6.Object.freeze()
  const obj3 = { prop: 42 };
  Object.freeze(obj3);
  
  obj3.prop = 99; // This assignment will be ignored in strict mode
  console.log(obj3.prop); // Output: 42
  
  //7.Object.fromEntries()
  const entries1 = [['a', 1], ['b', 2], ['c', 3]];
  const obj4 = Object.fromEntries(entries1);
  
  console.log(obj4); // Output: { a: 1, b: 2, c: 3 }
  
  //8.Object.getOwnPropertyDescriptor()
  const obj5 = { prop: 42 };
  const descriptor = Object.getOwnPropertyDescriptor(obj5, 'prop');
  
  console.log(descriptor); // Output: 42
  
//9.Object.getOwnPropertyDescriptors()
const obj6 = { a: 1, b: 2 };
const descriptors = Object.getOwnPropertyDescriptors(obj6);

console.log(descriptors); // Output: { a: { value: 1, writable: true, enumerable: true, configurable: true }, b: { value: 2, writable: true, enumerable: true, configurable: true } }

//10.Object.getOwnPropertyNames()
const obj7 = { a: 1, b: 2 };
const propertyNames = Object.getOwnPropertyNames(obj7);

console.log(propertyNames); // Output: ['a', 'b']

//11.Object.getOwnPropertySymbols()
const obj8 = { [Symbol('a')]: 1, [Symbol('b')]: 2 };
const symbols = Object.getOwnPropertySymbols(obj8);

console.log(symbols); // Output: [Symbol(a), Symbol(b)]

//12.Object.getPrototypeOf()
const person1 = { name: 'John' };
const john1 = Object.create(person1);

console.log(Object.getPrototypeOf(john1) === person1); // Output: true

//13.Object.is()
console.log(Object.is(5, 5)); // Output: true
console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0)); // Output: false

//14 .Object.isExtensible(), Object.isFrozen(), Object.isSealed()
const obj9 = { prop: 42 };
console.log(Object.isExtensible(obj9)); // Output: true

Object.freeze(obj9);
console.log(Object.isFrozen(obj9)); // Output: true

Object.seal(obj9);
console.log(Object.isSealed(obj9)); // Output: true

//15.Object.keys()

const obj10 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj10);

console.log(keys); // Output: ['a', 'b', 'c']

//16.Object.preventExtensions(), Object.seal(), Object.freeze()
const obj11 = { prop: 42 };

Object.preventExtensions(obj11);
obj11.newProp = 99; // This addition will be ignored
console.log(obj11.newProp); // Output: undefined

Object.seal(obj11);
delete obj11.prop; // This deletion will be ignored
console.log(obj11.prop); // Output: 42

Object.freeze(obj11);
obj11.prop = 99; // This modification will be ignored
console.log(obj11.prop); // Output: 42

//17.Object.setPrototypeOf()
const person4 = { name: 'John' };
const john4 = {};

Object.setPrototypeOf(john4, person4);
console.log(john4.name); // Output: John
