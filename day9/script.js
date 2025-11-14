//promises 

// const waitfun=(time, massage)=>{
//     setTimeout(()=>{
//         console.log(massage);
//     },time);
// }
// const ordercoffee=()=>{
//     waitfun(3000,"coffee is ready");
//     waitfun(6000,"tea is ready");
//     waitfun(9000,"milk is ready");
//     waitfun(12000,"sugar is ready");
//     waitfun(15000,"lemon is ready");
// }

const waitfun=(time, massage)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(massage);
            resolve();
        },time);
    })
}
// const ordercoffee=()=>{
//     waitfun(3000,"coffee is ready")
//     .then(()=>{
//         return waitfun(6000,"tea is ready");
//     })
//     .then(()=>
//          waitfun(5000,"milk is ready"))
//     .then(()=>
//          waitfun(4000,"sugar is ready"))
//     .then(()=>
//          waitfun(3000,"lemon is ready"))
//     .then(()=>{
//         console.log("all are ready");
//     })
// }

//await
const ordercoffee=async()=>{
    await waitfun(3000,"coffee is ready");
    await waitfun(6000,"tea is ready");
    await waitfun(5000,"milk is ready");
    await waitfun(4000,"sugar is ready");
    await waitfun(3000,"lemon is ready");
    console.log("all are ready");
}