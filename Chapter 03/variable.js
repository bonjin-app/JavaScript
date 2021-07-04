// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'gigas';
    console.log(name);

    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언을 해도 제일 상위로 선언부를 올린다.
// 블록스콥이 없다. 블록스콥을 무시한다.
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
// 변수의 포인터가 잠겨있다.
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variables types
// primitive single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`) // = number
console.log(`value: ${size}, type: ${typeof size}`) // = number

// number - speicla numberic values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);  // = Infinity
console.log(negativeInfinity); // = -Infinity
console.log(NaN); // = NaN

// binInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2^53) ~ 2^53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
// let x = undefined;
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3 === symbol4); // true
console.log(`value: ${symbol3.description}, type: ${typeof symbol3}`);

// object, real-life object, data structure
const gigas = {name: 'gigas', age: 20};
gigas.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)) // 'h'
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' + '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // TypeError