const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers) {
//     console.log(number);
// }


//  for of can not be used with in objects
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
// for (const key of bottle) {
//     console.log(key);
// }


//  first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys)
for (const key of keys) {
    // console.log(key, bottle[key]);
}
// for in loop
for (const key in bottle) {
    const values = bottle[key]
    // console.log(key, values)
}
// advanced
const pair = Object.entries(bottle);
// console.log(pair); 

for (const [key, values] of Object.entries(bottle)) {
    console.log(key, values)
}