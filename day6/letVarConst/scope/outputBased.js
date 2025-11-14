console.log("Hello World");
var a=20;
console.log(" value of a in global scope",a);
function callValue( ){
    console.log(a);
    var a=30;
    console.log(" value of a in local scope",a);
}
callValue( a)

