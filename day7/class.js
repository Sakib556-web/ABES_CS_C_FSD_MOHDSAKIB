class student{
    constructor(rollNO,name ,course,branch){
        this.rollNO=rollNO;
        this.name=name;
        this.course=course;
        this.branch=branch;
    }
}
const student1=new student(101,"xyz","Btech","CSE");
const student2=new student(102,"pqr","Btech","ECE");
console.log(" student1", student1);
console.log(" student2", student2);