let strToNum="123"-123;
console.log(" strToNum", strToNum);
let numToStr=123+"";
console.log(" numToStr", numToStr);
let strToBool="true"=="true";
console.log(" strToBool", strToBool);
let boolToStr=true+"";
console.log(" boolToStr", boolToStr);
let a="23" +23 +(-67)+"67"+true+false;
console.log(" a", a);
let b=+"23" +23 +(-67)+"67"+true+false;
console.log(" b", b);
//typeof
console.log(" typeof strToNum", typeof strToNum);
console.log(" typeof numToStr", typeof numToStr);
console.log(" typeof strToBool", typeof strToBool);
console.log(" typeof boolToStr", typeof boolToStr);
console.log(" typeof a", typeof a);
console.log(" typeof b", typeof b);
//type coercion
