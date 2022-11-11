//<1> Escaping Literal Quotesin String.
console.log('\"Himanshu Thaur\" is my \'name\'.');

//<2> Escape Sequences in Strings.
console.log("My Name is Himasnshu.\\");
console.log("My Name is \n Himasnshu.");
console.log("\t My Name is Himasnshu.");
console.log("My Name \b is \fHimasnshu.");

//<3> Appending.
let myStr = 'Himanshu';
const str = ' is awesome!';
myStr += str;
console.log(myStr);

//<4> Undrstand string immutibility.
let myStrr = 'Himanshu';
myStrr[0] = 'P';
console.log(myStrr);

//<5> Multidimensional array.
const arr = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
console.log(arr[0][2]);

//<6> Manipulating array.
const city = ['Mumbai', 'Pune', 'Nashik', 'Shambhaji_Nagar'];
console.log(city);
city.push('Bengluru');
console.log(city);
city.pop();
console.log(city);
city.shift();
console.log(city);
city.unshift('Mumbai');
console.log(city);

//<7> Understanding Undefined Values returned From a Function.
let sum = 0;
function addSum(num) {
    sum += num;
    return sum;
    //if return is not written then function will be undefined. 
}
console.log(addSum(5));

//<8> Stand in Line.
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
console.log(nextInLine([1, 2, 3], 5));

//<9> javascript objects.
const Himanshu = {
    firstName: "Hiamsnhu",
    lastName: "Thakur",
    age: 18,
    workSpace: "informationTechnology"
};
const name = Himanshu.firstName;
console.log(name);
const age = Himanshu["age"];
console.log(age);

//<10> Updating Object Properties.
Himanshu.workSpace = "Geo-Politics";
Himanshu["age"] = 18.5;
console.log(Himanshu);

//<11> Deleting Properties from Object.
delete Himanshu["age"];
console.log(Himanshu);

//<12> Using objects for lookups.
function phoneticLookup(value) {
    let result = '';
    result = Himanshu[value];
    return result;
}
console.log(phoneticLookup('firstName'));

//<13> Testing Objects For Properties.
function checkProp(prop){
    if (Himanshu.hasOwnProperty(prop)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkProp("lastName"));
console.log(checkProp("JOB"));

//<14> Manifulating Complex Objects.
const arrObj = [
    {
        name: "Dog",
        legs: 4,
        petName: "Raju",
        nickNames: [
            "Buzo", "Pocchi", "Tomy"
        ]
    },
    {
        name: "Cat",
        legs: 4,
        petName: "Kuro",
        nickNames: [
            "Mini", "Tom", "Rat"
        ]
    },
    {
        name: "Kamelian",
        legs: 4,
        petName: "Kamli",
        nickNames: [
            "Stack", "Pami", "Kamlesh"
        ]
    }
]
console.log(arrObj[0].name);
console.log(arrObj[1].legs);
console.log(arrObj[2].nickNames[1]);

//<15> Nested Objects and Array.
const nest = {
    mammals: {
        dog: {
            name: "Dog",
            legs: 4,
            petName: "Raju",
            nickNames: [
                "Buzo", "Pocchi", "Tomy"
            ]
        },
        cat: {
            name: "Cat",
            legs: 4,
            petName: "Kuro",
            nickNames: [
                "Mini", "Tom", "Rat"
            ]
        }
    }
};
console.log(nest.mammals["cat"].petName);
console.log(nest.mammals["dog"].nickNames[1]);

//<16> Math.random() Function with Javascript.
function random() {
    return Math.random() * 10;
}
console.log(random());

//<17> Math.floor() Function with Javascript.
function floor(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(floor(10, 20));

//<18> Math.parseInt() Function with Javascript.
function parseeInt() {
    console.log(parseInt("45"));
    return parseInt("111", 2);//radix
}
console.log(parseeInt());

//<19> Tenary Operator.
function compare(a, b) {
    return a > b ? "a is greater." : "b is greater or equal";
}
console.log(compare(5, 1));

//<20> Recurssion Function.
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  console.log(countup(5));


