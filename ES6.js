//<1> Compare Scopes of the var and let keywords.
let name = 'Himanshu';
name = 'Himanshu Thakur';
console.log(name);
var nam = 'Himanshu'; 
var nam = 'Himanshu Thakur';
console.log(nam);

//<2> Mutate an array Declared with const.
const array = [5, 7, 2];
array[2] = 3;
array.pop();
array.unshift(3);
console.log(array);

//<3> Prevent Object Mutation.
const obj = {
    firstName: "Himanshu",
    lastName: "Thakur",
    feild: "Information_Technology"
};
Object.freeze(obj);
obj.type = "Human";
console.log(obj);

//<4> Use Arrow Function to Write Consise Anonymous Function. 
const ourFunction = function(a, b) {
    const ourVar =  a + b;
    return ourVar;
}
const myFunction = (p, q) => {
    const myVar = p * q;
    return myVar;
}
console.log(ourFunction(4, 5));
console.log(myFunction(4, 4));

//<5> Set Default Parameters For Your Function.
const defaultFunction = (num = 45) => {
    for (let i = 1; i <= num; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}
defaultFunction();

//<6> Use rest Parameter with Functions Parameters.
const rest = (...arg) => {
    const arr = [];
    arr.push(...arg);
    console.log(arr);
}
rest(1, 2, 3, 4);

//<7> Use of spread operator to Evaluate Arrays In-Place.
const build = [3, 4, 5, 7, 9];
const i = [...build];
console.log(i);

//<8> Use Destructuring Assignment to Extract Values/variables from Objects/Nested Objects.
const objects = {
    firstName: "Himanshu",
    lastName: "Thakur",
    info: {    
        feild: "Information _Technology",
        ID: 52
    }
};
const namm = objects.firstName;
console.log(namm);
const { firstName } = objects;
console.log(firstName);
const { lastName: surName } = objects;
console.log(surName);
const { info: { feild: stream, ID: rollNo } } = objects;
console.log(stream, rollNo)

//<9> Use Destructing Assignment with the rest Parameter to Reassign Array Elements.
const an = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [p, q] = an;
console.log(p, q);
const [,, r,,, s, ...a] = an;
console.log(a);

//<10> Use Destructuring ssignment to Pass an Object as a Function's Parameters.
const stats = {
    max: 45,
    min: 25,
};
const half = ({ max, min }) => {
    return (max + min) / 2;
}
console.log(half({max: 45, min: 25}));

//<11> Use Concise Object literal Declarations Using Object Property Shorthand.
const createPerson = (name, age, gender) => {
    return {name, age, gender};
};
console.log(createPerson('Himanshu', 18, 'Male'));

//<12> Create Strings Using Template Literals.
const items = ['color', 'cycle', 'plant', 'human'];
const string = [];
for (let i = 0; i < items.length; i++) {
    string.push(`${items[i]} is good.`);
} 
console.log(string)

//<13> for of loop in javascript.
const forr = "HIMANSHUTHAKUR";
for (let i of forr) {
    console.log(i);
    let nad = [];
    nad.push(i);
    console.log(nad);
}

//<14> Write Concise Declarative Functions with ES6.
const oobj = {
    name: 'Himanshu',
    setName(newName) {
        this.name = newName;
    }
};
oobj.setName('Himanshu_Thakur');
console.log(oobj.name);

//<15> use class syntax to define a constructor, using class keywords.
class boy {
    constructor(name) {
        this.name = name;
    }
}
const Himanshu = new boy('Himanshu');
console.log(Himanshu.name);

// <16> Use getters and setters to control Access to objects.
class Thermostat {
    constructor(F) {
        this.F = F;
    }
    get temperature() {
        this.C = (5/9) * (this.F - 32);
        return this.C;
    }
    set temperature(C) {
        this.F = C * 9 / 5 + 32
    }
}
const thermos = new Thermostat(98);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 36;
temp = thermos.temperature;
console.log(temp);

// <17> Use Export to share a code Block; there are two ways.

// Use export keyword at time of declaretion.
/*export const sum = (a, b) => {
    return a + b;
}

// Use export keyword at bottom.
const substract = (p, q) => {
    return p - q;
}
export {substract};*/

// <18> Reuse javascript code using import.

/*import {sum, substract} from './file_system.js';
import * as calc from './file_system';

for default exports
import substract from './file_system.js';
*/


// <19> Create an Export Fallback with export default.

/* export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}*/

// <20> Javascript Promises.
const u = 10; 

const action = new Promise((resolve, reject) => {
    if (u % 2 == 0){
        resolve(console.log('even'));
    }
    else{
        reject(console.log('rejected, not even'));
    }
})

.then(result => {
    console.log('Succesfully Executed Promise!!');
})

.catch(err => {
    console.log('Err occured, Rejected!!');
})

.finally(() => {
    console.log('Yes, Promise Works.');
})


