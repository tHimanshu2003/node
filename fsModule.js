// // <1> syncronous file approach.

// const {readFileSync, writeFileSync} = require('fs');

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/result.txt', `Here is result: ${first}, ${second}`, {flag:'a'})
// // for making function to append the text, use {flag:'a'}

// <2> asyncronous file approach.

// const {readFile, writeFile} = require('fs');
// const { resourceLimits } = require('worker_threads');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         return;
//     }
//     else {
//         const first = result;
//         console.log(first);
//         readFile('./content/second.txt', 'utf8', (err, result) => {
//             if (err) {
//                 return;
//             }
//             else{
//                const second = result;
//                console.log(second);
//                writeFile('./content/result.txt', `Here is result: ${first}, ${second}`, {flag:'a'}, 
//                (err, result) => {
//                 if (err) {
//                     console.log('err')
//                     return;
//                 }
//                 else {
//                     return result
//                 }
//                }
//                ) 
//             }
//         })
//     }
// })

// console.log("Task complete!"); // Example of event loop and callback workinf.

