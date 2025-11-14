const nums1=document.getElementById("num1");
const nums2=document.getElementById("num2");
const output=document.getElementById("output");

// chack input validation
if(nums1.value===" " || nums2.value===""){
    output.innerHTML="Please enter both numbers";
    output.style.color="red";
}else{
    output.innerHTML="Result: ";

}
function add(){
    const result=Number(nums1.value)+Number(nums2.value);
    output.innerHTML="Result: "+result;

}
function sub(){
    const result=Number(nums1.value)-Number(nums2.value);
    output.innerHTML="Result: "+result;
}
function mul(){
    const result=Number(nums1.value)*Number(nums2.value);
    output.innerHTML="Result: "+result;
}
function div(){
    const result=Number(nums1.value)/Number(nums2.value);
    output.innerHTML="Result: "+result;
}
