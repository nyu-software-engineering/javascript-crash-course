
let x = 5; // a block-scoped variable declared at the "global" block level

{
  let x = 10; // a block-scoped variable declared within a local block (any code within curly braces { ... } )
}

console.log(x); // expected output '5'
