//Head

const head = (...[first]) => {return first}; 
console.log(head(1,2,3,4))

//Tail
const tail = (...[first,...rest]) => {return rest}; 
console.log(tail(2,4,6,8,10))

//Init
const init = (a) => { return a.slice(0, a.length - 1);};
console.log(init([1,3,5,7,11]))

//Last

const last = (a) => { return a.slice(a.length - 1);} ;
console.log(last([1,3,5,7,9]))