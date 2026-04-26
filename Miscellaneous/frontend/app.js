// const stu1={
//     name : "adam",
//     age : 25,
//     marks : 90,
//     getMarks : function(){
//         return this.marks;
//     },
// };

// const stu2={
//     name : "dam",
//     age : 24,
//     marks : 95,
//     getMarks : function(){
//         return this.marks;
//     },
// };

// const stu3={
//     name : "aam",
//     age : 24.5,
//     marks : 99,
//     getMarks : function(){
//         return this.marks;
//     },
// };

// let arr=[1,2,3];
// arr.sayHello = () => {
//     console.log("hello i am arr");
// };

class Student{
    constuctor(name, age, marks)
    {
    this.name=name;
    this.age=age;
    this.marks=marks;
    }
    talk(){
    console.log(`Hi, I am ${this.name}`);
    }
}

let stu1=new Student("adam",25,98);
