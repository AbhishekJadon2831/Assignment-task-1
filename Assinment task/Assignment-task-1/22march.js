
//Map
// let arr1=[1,2,3,4,5,6,7,8,9,10]
// let arr2=[4,4,6]
// Array.prototype.mypush=function(cb){
//     let newArr=[]

//     for(let i=0; i<this.length; i++){
//         let elm=this[i]
//         let val=cb(elm,i,this)
//         newArr.push(val)
//     }
//     return newArr
// }

// let val=arr2.mypush((elm)=>{ 
//     return elm*2
// })
// console.log(val);





//reduce
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [4, 4, 6];

// Array.prototype.myReducePush = function (cb, initialValue) {
//     let result = initialValue || [];

//     this.reduce((acc, elm, i, array) => {
//         let val = cb(elm, i, array);
//         acc.push(val);
//         return acc;
//     }, result);

//     return result;
// };

// let val = arr2.myReducePush((elm) => {
//     return elm +2;
// }, []);

// console.log(val);  




//Foreach
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [4, 4, 6];

// Array.prototype.myForEachPush = function (cb) {
//     let newArr = [];

//     this.forEach((elm, i, array) => {
//         let val = cb(elm, i, array);
//         newArr.push(val);
//     });

//     return newArr;
// };

// let val = arr2.myForEachPush((elm) => {
//     return elm;
// });

// console.log(val);  






// filter
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array.prototype.myFilter = function (cb) {
//     let newArr = [];

//     this.forEach((elm, i, array) => {
//         if (cb(elm, i, array)) {
//             newArr.push(elm);
//         }
//     });

//     return newArr;
// };

// let filteredArr = arr1.myFilter((elm) => {
//     return elm % 2 === 0; 
// });

// console.log(filteredArr);  
