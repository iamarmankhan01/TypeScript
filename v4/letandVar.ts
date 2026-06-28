// function test() {
//   if (true) {
//     let x = 10;
//     console.log(x);
//   }
  
// }
// test();

//var is not blocked scoped it is function scoped
function test() {
  if (true) {
    var x = 20;
   
  }
   console.log(x);
}
test();