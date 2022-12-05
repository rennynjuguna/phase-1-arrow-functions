const divide = (divide) => 2000 / 100;
divide('divide')
const nums = [2];
const square = (parameter1) => {
   let squares= nums.map(x => x ** x); 
   return parameter1 * parameter1;
   square;
}
const add = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
}
add(3,4);