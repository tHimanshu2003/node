// <1> Template Literals
// <2> Dsetructing of objects and arrays.
const obj = {
    first_name: 'Himanshu',
    last_name: 'Thakur',
    course: 'javascript'
}
const {first_name:fn, last_name, course} = obj;
console.log(fn,last_name,course)

// <3> Destructing arrays
const [a, b, c, d, e] = [1, 2, 3, 6, 9];
console.log(a, b, c, d, e);

// <4> for of loop
const str = 'Machine_learning'
for (i of str) {
    console.log(i);
};

// <5> spread operator.
// <6> rest operator.
// <7> arrow function.
// <8> default parameters.
// <9> array methods
const arr = [1, 2, 3, 4 ];
console.log(arr.includes(2));

// <10> let & const.
// <11> import and export.
// <12> padStart() & padEnd().

const s = 'string';

console.log(s.padStart(10, 'a'));
console.log(s.padEnd(10, 'a'));

// <13> classes.
class animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }

    show_animal(name = 'Himanshu') {
        return (`${name} likes the ${this.type}`);
    }

    static return25() {
        return 25;
    }

}
let dog = new animal('dog', 4);
console.log(dog.type + ' have ' + dog.legs + ' legs ');
console.log(dog.show_animal('Hary'));
console.log(animal.return25());

// get and set functions in classes.

class cat extends animal {
    constructor(events, type, legs) {
        super(type = 'dog', legs);
        this.events = events
    }

    get acess() {
        return `${this.type} is a animal and have ${this.legs} legs`;
    }

    routine() {
        return (`${this.type} performs ${this.events}`);
    }
}

const cl = new cat('bark');
console.log(cl.type);
console.log(cl.show_animal('Himanshu'))
console.log(cl.routine());

// <14> ***Trailing commas.

// <15> async and await.

// <16> sets
const exset = new Set([1, 1, 1, 1, 5, 5, 2]);
console.log(exset.add(6));
console.log(exset.delete(1))
console.log(exset.has(6));
console.log(exset.clear());
console.log(exset.size);