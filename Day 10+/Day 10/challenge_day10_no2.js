const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// 1. Find a union b

const c = [...a, ...b];
const union_c = new Set(c);

console.log(union_c);

// 2. Find a intersection b

const A = new Set(a);
const B = new Set(b);

const intersection_c = a.filter((num) => B.has(num));

console.log(intersection_c);

// 3. Find a with b

const difference_c = a.filter((num) => !B.has(num));

console.log(difference_c);
