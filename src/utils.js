console.log('Utils.js is running');

const square = (x) => x*x;

const add = (a, b) => a+b;

const subtract = (a, b) => a-b;
export {square, add, subtract as default};
//export - single default export - indefinite # of named exports