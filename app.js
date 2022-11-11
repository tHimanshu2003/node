// // console.log(_dirname);
// console.log("Hello, My name is Himanshu.");


console.log('Hello my name is Himanshu.');

// async function ss() {
//     console.log('Hello');
//     console.log('My');
//     console.log('Name is');
//     await 
//     console.log('Himanshu.');

// }
let u = true;
const func = (() =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            if (u){
                resolve(console.log('Everything Looks Good!'));
        }}, 2000)
        })
}) 


async function aw() {
    console.log('A');
    console.log('B');
    await func();
    console.log('C');
    console.log('D');

}

aw();
// export {set};

// function sum(a, b) {
//     return a + b;
// };

// console.log(`The sum of a abd b is ${sum(1, 2)}`);
