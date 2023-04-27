// Convert Object into Array
// const obj={
//     name: "User",
//     age:25,
//     city: "Ahmedabad"
// }
// function convertArray(key) {
//     return [ key, obj[key] ];
// }
// var arr = Object.keys(obj).map(convertArray)


// // var arr = Object.keys(obj).map(function (key) {
// //     return [ key, obj[key] ];
// //   });
//   console.log(arr);

//***************************************************************************************** */
// const obj={
//     name: "User",
//     age:25,
//     city: "Ahmedabad"
// }

// const convert2Array = Object.getOwnPropertyNames(obj).map( 
//     (key) => [key, obj[key]] 
//   ) 
   
//   console.log(convert2Array)

//******************************************************************************************** */
// const obj={
//     name: "User",
//     age:25,
//     city: "Ahmedabad"
// }

// const arr=[];
// for(let key in obj){
//     arr.push([key,obj[key]]);
// }
// console.log(arr);
