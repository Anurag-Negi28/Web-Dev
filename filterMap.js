//Map function
let input = [1, 2, 3, 4, 5];
/*
function multipleOfTwo(input) {
  return input * 2;
}
  */
console.log(
  input.map((input) => {
    return input * 2;
  })
);
//Fiter function
/*
function isEven(input) {
  return input % 2 === 0;
}
console.log(input.filter(isEven));
*/
console.log(
  input.filter((input) => {
    return input % 2 === 0;
  })
);
