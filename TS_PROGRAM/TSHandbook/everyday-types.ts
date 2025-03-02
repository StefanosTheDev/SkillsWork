// TypeScript Expanded Sample File: Intro to Mid-Level Developer

// 1. Basic Type Annotations
let age: number = 25;
let isDeveloper: boolean = true;

// 2. Arrays, Tuples, and Readonly Arrays
let skills: string[] = ['JavaScript', 'TypeScript', 'React'];
let tupleExample: [string, number, boolean] = ['TS', 3, true];
let readonlySkills: readonly string[] = ['HTML', 'CSS']; // Prevents modification

// 3. Enums
enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

const currentLogLevel: LogLevel = LogLevel.DEBUG;

// 4. Type Aliases and Union Types
type ID = string | number;
type Result<T> = { success: boolean; data: T };

function fetchUser(id: ID): Result<User | null> {
  return {
    success: true,
    data: { id: 1, name: 'Alice', email: 'alice@example.com' },
  };
}

// 5. Interfaces with Nested Objects
interface Address {
  street: string;
  city: string;
  zip: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address?: Address; // Optional
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  address: { street: '123 TS Lane', city: 'TypeCity', zip: '12345' },
};

// 6. Functions with Default and Rest Parameters
function logMessage(
  level: LogLevel,
  message: string = 'No message provided',
  ...details: string[]
): void {
  console.log(`[${level}] ${message}`, ...details);
}

logMessage(LogLevel.INFO, 'App started');
logMessage(LogLevel.ERROR, 'Something went wrong', 'Error ID: 42');

// 7. Function Overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine('Hello', 'World')); // HelloWorld

// 8. Classes and Inheritance
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  speak(): string {
    return `${this.name}, the ${this.breed}, barks.`;
  }
}

const dog = new Dog('Rex', 'Golden Retriever');
console.log(dog.speak());

// 9. Abstract Classes
abstract class Shape {
  abstract calculateArea(): number;

  display(): string {
    return `The area is ${this.calculateArea()}`;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.display());

// 10. Generics with Constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: 'Alice' }, { age: 25 });
console.log(merged);

// 11. Utility Types (Partial, Readonly, Pick, Omit)
type PartialUser = Partial<User>; // Makes all properties optional
type ReadonlyUser = Readonly<User>; // Makes all properties read-only
type PickedUser = Pick<User, 'id' | 'email'>; // Picks specific properties
type OmittedUser = Omit<User, 'email'>; // Omits specific properties

// 12. Type Guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

const unknownValue: unknown = 'Hello TS';

if (isString(unknownValue)) {
  console.log(unknownValue.toUpperCase());
}

// 13. Modules and Namespaces
// File: mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

// File: main.ts
// import { add } from "./mathUtils";
// console.log(add(2, 3));

// 14. Decorators (Experimental)
function Logger(target: Function) {
  console.log(`Logging class: ${target.name}`);
}

// @Logger
class Vehicle {
  constructor(public type: string) {}
}

// 15. Promises and Async/Await
function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Data from ${url}`), 1000);
  });
}

async function fetchExample() {
  const data = await fetchData('https://api.example.com');
  console.log(data);
}

fetchExample();

// 16. Advanced Mapped Types
type UserKeys = keyof User; // "id" | "name" | "email" | "address"
type UserWithoutAddress = Omit<User, 'address'>;

// 17. Indexed Access Types
type UserEmail = User['email']; // string

// 18. Conditional Types
type IsString<T> = T extends string ? true : false;
type TestString = IsString<string>; // true
type TestNumber = IsString<number>; // false

// 19. Template Literal Types
type Route = `/users/${string}`;
const route: Route = '/users/123';

// 20. Error Handling with Never
function throwError(message: string): never {
  throw new Error(message);
}

function processInput(input: number | string): string {
  if (typeof input === 'string') return input.toUpperCase();
  if (typeof input === 'number') return input.toString();
  return throwError('Invalid input type');
}

/*
Key Features Highlighted:

Basic Types: string, number, boolean
Complex Types: interfaces, enums, type aliases, tuples, readonly arrays
Functions: Overloads, generics, default/rest parameters
Object-Oriented Programming: Classes, inheritance, abstract classes
Utility Types: Partial, Readonly, Pick, Omit
Advanced Types: Conditional types, indexed access, mapped types
Decorators: Experimental feature for metadata
Error Handling: Using never
Async Programming: Promises and async/await
*/
