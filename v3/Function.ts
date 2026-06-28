// function test(){
//     console.log("Hello i am function");
// }
// test();

//==========================================================

// function test(): number {
//     return 200;
// }
// console.log(test());

//==========================================================

// function test(name:string):void{
//     console.log(name);   
// }
// test("Ajay");

//==========================================================

// var test = function () {
//     console.log(852);

// }
// test()


//==========================================================

// function cal(a: number, b: number) {
//     return a + b;
// }
// var result = cal(10, 63);
// console.log(result);


//==========================Anonymous================================

// setTimeout(function () {
//     console.log("Hello after 5 seconds");
// }, 5000);


//===========================Arrow Function===========================

// var f = ()=>{
//     console.log("Arrow Function");
// }
// f()


//==========================================================

// var cal = (a: number, b: number): number => {
//     return a * b;
// }
// console.log(cal(30, 54));

//==========================================================

type Employee =  {
    id: number;
    name: string;
    salary: number;
}

const employees: Employee[] = [
    { id: 101, name: "Arman", salary: 50000 },
    { id: 102, name: "Rahul", salary: 60000 },
    { id: 103, name: "Aman", salary: 55000 },
    { id: 104, name: "Pooja", salary: 70000 }
];

var emp =employees.find((e)=>e.id==101);
console.log(emp);
