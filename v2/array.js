"use strict";
// var n1:Array<string>=["mike","stallin","adam"]
// console.log(n1);
// console.log(n1[0]);
// console.log(n1.length);
//==================================
// var a1:Array<any>=["mike","stallin",54]
// console.log(a1);
//===============enum===================
// enum Gender{
//     Male,
//     Female
// }
// console.log(Gender.Male);
// console.log(Gender[0])
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 5] = "Male";
    Gender[Gender["Female"] = 6] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender[5]);
