// <1> sync & async.
// sync
const s1 = (() => {
    console.log('First  Process Completed.');
}) 

const s2 = (() => {
    console.log('Second  Process Completed.');
}) 

const s3 = (() => {
    console.log('Third  Process Completed.');
}) 

s1();
s2();
s3();

// async
const as1 = (() => {
    console.log('First  Process Completed.');
}) 

const as2 = (() => {
    console.log('Second  Process Completed.');
}) 

const as3 = (() => {
    console.log('Third  Process Completed.');
}) 

setTimeout(() => {
    as2();
}, 5000)

as1();
as3();

// <3> callback functions.
const callback = ((sec_Func) => {
    console.log('1st Process Completed.');
    sec_Func();
})

callback(as2)

// <4> async & await.
// *async.
async function sys() {
    try {
        await as2();
    }catch(error) {
        console.log('abc does not exists', error);
    }finally {
        console.log('code runs');
    }
}

sys();

// await.
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

// <5> Ice cream projects using callbacks, Promise, and async & await.

// callback project for ice cream.

let status = true;
const order = () => {
    if (status) {
        console.log('Shop was open!');
        setTimeout(() => {
            console.log('Order was Placed.')
            call();
        }, 2000)
    }
    else {
        console.log('Sorry, shop was closed!');
    }
} 
order()

const call = () => {
    setTimeout(() => {
        console.log('Cutting of fruits was done.');
        setTimeout(() => {
            console.log('Water and ice was added.');
            setTimeout(() => {
                console.log('Ice cream machine was started.');
                setTimeout(() => {
                    console.log('Container was selected.');
                    setTimeout(() => {
                        console.log('Toppings was selected.');
                        setTimeout(() => {
                            console.log('Ice cream was served.');
                            setTimeout(() => {
                                console.log('Shop was closed!');
                            }, 2000)
                        }, 2000)
                    }, 3000)
                }, 2000)
            }, 1000)
        }, 1000)
    }, 2000)
} 

// Promise project For Ice cream shop.

const pro = new Promise((resolve, reject) => {
    if (status == true) {
        resolve(console.log('Shop was open!'));
    }
    else {
        reject(console.log('Sorry, Time was over!'));
    }
})

.then(
    setTimeout(() => {
        
    }, 2000)
)
.then(
    setTimeout(() => {
        console.log('Cutting of fruits was done.');
    }, 2000)
)
.then(
    setTimeout(() => {
        console.log('Water and ice was added.');
    }, 1000)
)
.then(
    setTimeout(() => {
        console.log('Ice cream machine was started.');
    }, 1000)
)
.then(
    setTimeout(() => {
        console.log('Container was selected.');
    }, 2000)
)
.then(
    setTimeout(() => {
        console.log('Toppings was selected.');
    }, 3000)
)
.then(
    setTimeout(() => {
        console.log('Ice cream was served.');
    },2000)
)
.catch(setTimeout(() => {
    console.log('Sorry for inconvinience.');
}, 3000))
.finally(
    setTimeout(() => {
        console.log('Shop was closed!');
    }, 3000)
)