//callback queue - Task Queue
setTimeout(()=>{console.log('1', "javascript")},0)//webAPI setinterval for 0s
setTimeout(()=>{console.log('2', "typescript")},10)

//2 job queue - microtask queue
Promise.resolve("new edition").then((data)=> console.log('2',data))

//3 no async function
console.log("3","node")//this will print first

//3 promises
// parrallel 
//sequencial
// race i.e call 3 things whichever comes fist

const promisify =(item,delay)=>
    new Promise((resolve)=>
        setTimeout(()=>
            resolve(item),delay));

const a = () => promisify('a',100);
const b = () => promisify('b',50);
const c = () => promisify('c',800);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1} ${output2} ${output3}`
}
parallel().then(console.log)

async function race() {
    const promises = [a(), b(), c()];
    const [output1] = await Promise.race(promises);
    return `race is done: ${output1}`
}
race().then(console.log)

async function sequence() {
    const output1= await a();
    const output2= await b();
    const output3= await c();
    return `sequence is done: ${output1} ${output2} ${output3}`
}
sequence().then(console.log)//taking more time
