class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `hi there  ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class Student extends Person {
    constructor(name, age, major) {
         super(name, age);
         this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description = description + ` And their major is ${this.major}.`;
        }
        return description;
    }
};

class Traveller extends Person {
    constructor(name,age,location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            greeting = greeting + ` You're form ${this.location}`
        }
        return greeting;
    }
};

const me = new Student("Shreshth", 28, "EE");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

console.log(me.hasMajor());
console.log(other.hasMajor());

const bhalla = new Traveller("Ashish Bhalla", 23, "Delhi");
console.log(bhalla.getGreeting());

const vb = new Traveller("Vaga", 98);
console.log(vb.getGreeting());