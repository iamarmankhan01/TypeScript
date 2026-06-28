// interface User {
//   readonly id: number; //when you use the readonly value can't be change
//   name: string;
//   email: string;
//   add ?:string; //if you use ? the value are undefined
// }
// const user: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com"
// };

// console.log(user.id);
// console.log(user.name);
// console.log(user.email);
// console.log(user.add);

//=========================================================================

// interface Add {
//     (a: number, b: number): number;

// }
// const v: Add = (a, b) => a + b;
// console.log(v(13, 12));

//=========================================================================

// interface num{
//     (a: number):void
// }

//  const n: num=(a)=>console.log(a);
//  n(36)


//=========================================================================

// interface Person {
//     name: String
//     greet(): void;
// }

// const p: Person = {
//     name: "Arif",
//     greet(): void {
//         console.log("Hello");
//     }
// }
//    p.greet();
//    console.log(p.name);

