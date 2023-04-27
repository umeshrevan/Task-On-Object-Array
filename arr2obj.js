//Convert array to object
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]
// const object= arr.reduce((acc,cur,)=>{
//     let key =cur[0]
//     let value= cur[1]
//     acc[key]=value
//     return acc
// },{})
// console.log(object);

//******************************************************************************************** */
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]

// function createObject(arr) { 
// 	let outputObject = {}; 
//   	for (let i = 0; i < arr.length; i++) { 
//       	 let key = arr[i]; 
//       	 let value = arr[i]; 
      	 
//     	outputObject[key] = value; 
//     }
//   	return outputObject; 
// }
// let myObject = createObject(arr); 
// console.log(myObject);

//************************************************************************************************* */

// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]
// const obj={...arr}
// console.log(obj);

//************************************************************************************************** */
// const arr = [["Apple", "Sweet"], ["Book", "Self-Help"], ["Bus", "Trip"]]
// const obj =Object.assign({},arr);
// console.log(obj);