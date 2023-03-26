const ar1 = []

ar1.push('one');
ar1.push('two');

const ar2 = [...ar1];

console.log(ar1.map(val => 'Value:' + val))
console.log(ar2)
console.log(ar2.filter(val => { return val !== 'oone'}))