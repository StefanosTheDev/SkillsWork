"use strict";
// TypeScript Expanded Sample File: Intro to Mid-Level Developer
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
// 1. Basic Type Annotations
var username = 'JohnDoe';
var age = 25;
var isDeveloper = true;
// 2. Arrays, Tuples, and Readonly Arrays
var skills = ['JavaScript', 'TypeScript', 'React'];
var tupleExample = ['TS', 3, true];
var readonlySkills = ['HTML', 'CSS']; // Prevents modification
// 3. Enums
var LogLevel;
(function (LogLevel) {
    LogLevel["ERROR"] = "error";
    LogLevel["WARN"] = "warn";
    LogLevel["INFO"] = "info";
    LogLevel["DEBUG"] = "debug";
})(LogLevel || (LogLevel = {}));
var currentLogLevel = LogLevel.DEBUG;
function fetchUser(id) {
    return {
        success: true,
        data: { id: 1, name: 'Alice', email: 'alice@example.com' },
    };
}
var user = {
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
    address: { street: '123 TS Lane', city: 'TypeCity', zip: '12345' },
};
// 6. Functions with Default and Rest Parameters
function logMessage(level, message) {
    if (message === void 0) { message = 'No message provided'; }
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    console.log.apply(console, __spreadArray(["[".concat(level, "] ").concat(message)], details, false));
}
logMessage(LogLevel.INFO, 'App started');
logMessage(LogLevel.ERROR, 'Something went wrong', 'Error ID: 42');
function combine(a, b) {
    return a + b;
}
console.log(combine(1, 2)); // 3
console.log(combine('Hello', 'World')); // HelloWorld
// 8. Classes and Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        return "".concat(this.name, " makes a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "".concat(this.name, ", the ").concat(this.breed, ", barks.");
    };
    return Dog;
}(Animal));
var dog = new Dog('Rex', 'Golden Retriever');
console.log(dog.speak());
// 9. Abstract Classes
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.display = function () {
        return "The area is ".concat(this.calculateArea());
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(10, 20);
console.log(rectangle.display());
// 10. Generics with Constraints
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var merged = merge({ name: 'Alice' }, { age: 25 });
console.log(merged);
// 12. Type Guards
function isString(value) {
    return typeof value === 'string';
}
var unknownValue = 'Hello TS';
if (isString(unknownValue)) {
    console.log(unknownValue.toUpperCase());
}
// 13. Modules and Namespaces
// File: mathUtils.ts
function add(a, b) {
    return a + b;
}
// File: main.ts
// import { add } from "./mathUtils";
// console.log(add(2, 3));
// 14. Decorators (Experimental)
function Logger(target) {
    console.log("Logging class: ".concat(target.name));
}
// @Logger
var Vehicle = /** @class */ (function () {
    function Vehicle(type) {
        this.type = type;
    }
    return Vehicle;
}());
// 15. Promises and Async/Await
function fetchData(url) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Data from ".concat(url)); }, 1000);
    });
}
function fetchExample() {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData('https://api.example.com')];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/];
            }
        });
    });
}
fetchExample();
var route = '/users/123';
// 20. Error Handling with Never
function throwError(message) {
    throw new Error(message);
}
function processInput(input) {
    if (typeof input === 'string')
        return input.toUpperCase();
    if (typeof input === 'number')
        return input.toString();
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
