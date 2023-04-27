// Exchange key- value pairs
//****************************************************************** */
// const obj={
//     name: "umesh",
//     age: "23",
//     dept: "Developer"
// }
// let objKeys=(Object.keys(obj));
// console.log(objKeys);
// let objValues=(Object.values(obj));
// console.log(objValues);
// let temp;
// temp=objKeys
// objKeys=objValues
// objValues=temp
// console.log(` Value to key:${objKeys}\n key to value:${objValues}`);

//********************************************************************* */
// const obj={
//     Do: "I",
//     JS: "know",
//     NodeJs: "and"
// }

// for(const key in obj) {
//     let objValues= key
//     let objKeys= obj[key]
//     console.log(objKeys,objValues);
//     //console.log(`${key}`);
//     //console.log(`${obj[key]}`);
// }

//************************************************************************/
// const obj={
//     Do: "I",
//     JS: "know",
//     NodeJs: "and"
// }

// const objValues= Object.keys(obj).reduce((acc,key)=>{
//     acc[obj[key]]=key
//     return acc
// },{})
// console.log(objValues);