const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Lola", age: 31, married: true };

//Clone

function clone(source) {
    return {...source };
};

console.log(clone(a));
console.log(clone(b));

//Merge

function merge(source, target) {
    return { ...target, ...source };
};

console.log(merge(a, b));
console.log(merge(b,a));

