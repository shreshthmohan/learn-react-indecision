// arguments object is not bound with arrow functions
// this ------ do --------

const add = (a,b) => {
    // console.log(arguments); // 
    return a + b;
};

console.log(add(54,2));

const multiplier = {
    numarr : [1, 5, 7, 4, 7],
    multiplyby : 4,
    multiply() {
        return this.numarr.map((num) => num * this.multiplyby);
    }
}

console.log(multiplier.multiply());