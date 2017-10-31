var name = "Shreshth";
var name = 'Sohan';
console.log('name', name);

let namelet = "Jane";
//let namelet = "Julie";
console.log('namelet', namelet);

const nameconst = "Fred";
// const cannot be redefined
// nameconst = "Gui";
console.log('nameconst', nameconst);

// block scoping
// let and const are block scoped:
var fullname = 'Shreshth Mohan';

if (fullname) {
    var firstname = fullname.split(' ')[0];
    
}

console.log(firstname);

