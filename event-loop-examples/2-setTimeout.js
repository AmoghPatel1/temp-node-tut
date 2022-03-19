// started operating system process
console.log('first');
setTimeout(()=> {
    console.log('second');
}, 0)  // even timeout is zero. It is offloading setTimeout from the flow..
console.log('third');
// completed and exited operating system process