const student={
    name:"John",
    age:20,
    address:{
        city:"abc",
        state:"UP",
        country:"India"
    }
}
const newStudent=Object.assign({},student);
newStudent.name="pqr";
newStudent.address.city="xyz";
console.log(" student", student);
console.log(" newStudent", newStudent);