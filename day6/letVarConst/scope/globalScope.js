var a=20;
let b=30;
const pi=3.14;
console.log("Global Scope");
console.log(" value of a in global scope",a);
console.log(" value of b in global scope",b);
console.log(" value of pi in global scope",pi);

function callValue(a,b,pi) {
    console.log("Local Scope");
    console.log(" value of a in local scope",a);
    console.log(" value of b in local scope",b);
    console.log(" value of pi in local scope",pi);
}
callValue(a,b,pi);