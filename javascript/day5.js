// const obj = {
//     name : "John",
//     surname : "Smith",

// }

// obj.name = "Pete";
// delete obj.name;
// console.log(obj);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let sum = 0;
//   if(salaries.isEmpty){
//     return 0;
//   }else{
//     let arr = Object.keys(salaries);
//     for(let i = 0; i<arr.length; i++){
//         sum+=salaries[arr[i]];
//     }
//     console.log(sum);
//   }
//    let obj = {
//      name: "john"
//    };
//  function isEmpty(obj){
//      if(obj.isEmpty){
//          return true;
//      }else{
//         return false;
//      }
//  }
//  console.log(isEmpty(obj));

// a property is called a method if its value is a function in an object if theere is no function is value it would be a PROPERTY

// let calculator = {
//     a:0,
//     b:0,
//     read:function(){
//         this.a = Number(prompt("value1",0))
//         this.b = Number(prompt("value2",0))
//     },
//     sum:function(){
//         return this.a+this.b;
//     },
//     mul:function(){
//         return this.a*this.b;
//     }
// }


// let arr = [5, 12, 12,45, 55, 65];

// let ans =  arr.filter((x)=>{
//       return x%5==0;
// })
// console.log(ans);


// function grand(){
//     console.log("grand");
//     function parent(){
//         console.log("parent");
//         function child(){
//             console.log("child");
//         }
//         return child
//     }
//     return parent;
// }

// console.log("1",grand());
// console.log(parent());


let data = [];

class Student{
    constructor(studentname, studentage ){
        this.age = studentage;
        this.name = studentname;
        // this.batch = "FS-15"
    }
}

class Student2 extends Student{
    constructor(name, age){  //previous
        super(name, age);   // current
        this.batch = "fs15"
    }
}

data.push(new Student2('arya', 25))
console.log(new Student2('arya', 25));