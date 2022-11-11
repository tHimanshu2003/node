const os = require('os');

const user = os.userInfo();

console.log(user);

console.log(`The upTime of System is ${os.uptime()}`);

const obj = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};

console.log(obj);
