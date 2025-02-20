// Q=1

// let score = 48;
// if (score >= 90) {
//     console.log("greade A");

// } else if (score >= 80 && score < 89) {
//     console.log("greade B");

// } else if (score >= 70 && score <= 79) {
//     console.log("greade c");

// } else if (score < 70 && score >= 50) {
//     console.log("greade d");

// } else {
//     console.log("fail");

// }





//Q=2

//  let a=5;
//  let b=5;
//  let c=7;
//  if(a === b && b === c && a === c){
//      console.log("Equilateral triangle.");

//  }else if(a === b || b === c || a===c){
//      console.log("Isosceles triangle.");

//  }else{
//      console.log("Scalene triangle");
//     
//  }





// Q=3

// let num=30;
// if(num % 2===0){
//     if(num>50){
//         console.log("Even and Large");

//     }else{
//         console.log("Even and small");

//     }
// }else{
//     if(num<30){
//         console.log("Odd and small");


//     }else{
//         console.log("Odd and Large");

//     }
// }



// Q=1

// let a=5;
// for(let i=1; i<=10; i++){
//     console.log(i*a);

// }




// Q=2

// let num=6;

// let tamp=0;
// for(let i=1; i<=num; i++){
//     tamp+=i;
// }
// console.log(tamp);



//Q=3


// const rows = 4;
// let a = '';
// for (let i = 1; i <= rows; i++) {
//   for (let j = 1; j <= i; j++) {
//     a += j + ' ';
//   }
//   a += '\n';
// }
// console.log(a);



// for loop Q


//Q=1

// for(let i=1; i<=5; i++){
//     star=""
//     for(let j=1; j<=i; j++){
//         star+="*"
//     }
//     console.log(star);

// }



//Q=2

// for(let i=1; i<=5; i++){
//     star=""
//     for(let j=5; j>=i; j--){
//         star+="*"
//     }
//     console.log(star);

// }



// Q = 3


// let a=6;
// for(let i=1; i<=a; i++){
//     space=""
//     for(let j=a; j>=i; j--){
//         space+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         space+="*"
//     }
//     console.log(space);


// }

// let a=5;
// for(let i=1; i<=a-1; i++){
//     space=" "
//     for(let j=1; j<=i; j++){
//         space+="1"
//     }
//     for(k=a+2; k>=i; k--){
//         space+="*"
//     }
//     console.log(space);


// }



// for(let i=1; i<=a; i++){
//     space=" "
//     for(let j=1; j<=i; j++){
//         space+=" "
//     }
//     for(k=a; k>=i*2; k--){
//         space+="1"
//     }
//     console.log(space);


// }


//Q=4


// for(let i=1; i<=5; i++){
//     str=" "
//     for(let j=1; j<=i; j++){
//         str=str+=j+" "
//     }
//     console.log(str);

// }




//Q=5

// for(let i=1; i<=5; i++){
//     str=" "
//     for(let j=5; j>=i; j--){
//         str=str+=j+" "
//     }
//     console.log(str);

// }







//Q=6

//  let n=9;

// for (let i = 1; i <= n; i += 2) {
//     console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
// }


// for (let i = n - 2; i >= 1; i -= 2) {
//     console.log(" ".repeat((n - i) / 2) + "*".repeat(i));
// }





//     let a=6;
//  for(let i=1; i<=a; i++){
//     space=""
//     for(let j=a; j>=i; j--){
//         space+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         space+="*"
//     }
//     console.log(space);



// }


// let a=6;
// for(let i=1; i<=a; i++){
//    space=""
//    for(let j=a; j>=i; j--){
//        space+=" "
//    }
//    for(let k=1; k<=i*2-1; k++){
//        space+="*"
//    }
//    console.log(space)

// }

// for(let i=a-1; i>=1; i--){
//     space=""
//     for(let j=a; j>=i; j--){
//         space+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         space+="*"
//     }
//     console.log(space);


// }



// let a = 10;
// if (true) {
//     let a = 20;
//     console.log(a);

// }
// console.log(a);





//For Loop Practice



// for(let i=1; i<=10; i++){
//     console.log(i);
// }




// for (let i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }





// for (let i = 1; i <= 5; i++) {
//     console.log(i * i);
// }


// for(let i=1; i<=100; i++){
//     if(i % 5===0){

//         console.log(i);

//     }

// }



// let n1=0;
// let n2=1;

// for(let i=3; i<=10; i++){
//     let next=n1+n2;
//     n1=n2;
//     n2=next;
//     console.log(next);

// }









// for(let i=1; i<=5; i++){
//     str=""
//     for(let j=1; j<=i; j++){
//         str+="*"
//     }
//     console.log(str);

// }





// for(let i=1; i<=10; i++){
//     console.log("7", "*", i, "=", i*7);

// }


// function printCharacters(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }
// }


// const myString = "Hello, world!";
// printCharacters(myString);



// let a=50;
// let s = 0;
// for (let i = 1; i <= a; i++) {
//     if(i % 2==0){
//         s += i;
//     }

// }
// console.log(s);






// let a=5;
// for(let i=1; i<=a; i++){
//     let  str=""
//     for(let j=a; j>=i; j--){
//          str+=" "
//     }
//     for(let k=1; k<=i; k++){
//         str+=k
//     }
//     for(let l=i-1; l>=1; l--){
//         str+=l
//     }
//     console.log(str);



// }




//While Loop Questions

//Q=1

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++

// }



//Q=2

// let i=1;
// let sum=0;
// while(i<=20){
//     if(i%2===0){
//       sum+=i;
//     }
//     i++;
// }
// console.log(sum);



//Q=3

// let i=5;
// while(i>=1){
//     console.log(i);
//     i--;

// }



//Q=4

// function isPalindrome(num) {
//     let originalNum = num;  
//     let reversedNum = 0;    

//     while (num > 0) {
//         let digit = num % 10;  
//         reversedNum = reversedNum * 10 + digit;  
//         num = Math.floor(num / 10);  
//     }


//     if (originalNum === reversedNum) {
//         return "Palindrome";  
//     } else {
//         return "Not a Palindrome";  
//     }
// }


// let input = 121;
// console.log(isPalindrome(input));  




//Q=5

// let i=1;
// let fe=1;
// while(i<=5){
//     fe*=i;
//     i++

// }
// console.log(fe);





//Switch Case Questions

//Q=1

// let num1 = 5;
// let num2 = 3;
// let operation = "+";
// switch (operation) {
//     case "+":
//         console.log(num1 + num2);
//         break;

//     case "-":
//         console.log(num1 - num2);
//         break;

//     case "/":
//         console.log(num1 / num2);
//         break;

//     case "*":
//         console.log(num1 * num2);
//         break;

//     default:
//         console.log("NAN");


// }




//Q=2

// let day = 1;
// switch (day) {
//     case 1:
//         console.log(" Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday ");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Not day");


// }




//Q=3

// let naxt="u";


// switch (naxt) {
//     case "a":
//         console.log("Vowel");
//         break;
//     case "e":
//         console.log("Vowel");
//         break;
//     case "i":
//         console.log("Vowel");
//         break;
//     case "o":
//         console.log("Vowel");
//         break;
//     case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }




//Q=4

// let mon="A";


// switch (mon) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Fair");
//         break;
//     case "D":
//         console.log("Poor");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default:
//         console.log("Invalid Grade");
// }




//Q=5

// let option = 2;

// switch (option) {
//     case 1:
//         console.log(" Add two numbers");
//         break;
//     case 2:
//         console.log("Subtract two numbers");
//         break;
//     case 3:
//         console.log("Multiply two numbers");
//         break;

//     default:
//         console.log("Exit");
//         break;
// }




//Event-questions


//Q=1

// const click = document.getElementById('clickMe');


// click.addEventListener("click", function () {
//     if (click.innerHTML === "Click Me") {

//         click.textContent = "Clicked!"

//     } else {

//         click.textContent = "Click Me"

//     }


// })





//Q=2


// const myDiv = document.getElementById("myDiv");

// myDiv.addEventListener("mouseover", () => {
//     myDiv.style.backgroundColor = "blue";
//     myDiv.style.color = "white";  
// });

// myDiv.addEventListener("mouseout", () => {
//     myDiv.style.backgroundColor = "lightgray";
//     myDiv.style.color = "black"; 
// });





//Q=3

// const inputField = document.getElementById("myInput");
// const paragraph = document.getElementById("myParagraph");
// inputField.addEventListener("input", () => {
//     paragraph.textContent = inputField.value;
// });








//Q=4

// const clickMeButton = document.getElementById("clickMeButton");
// const disableButton = document.getElementById("disableButton");


// const handleClick = () => {
//     alert("Button clicked!");
// };


// clickMeButton.addEventListener("click", handleClick);


// disableButton.addEventListener("click", () => {
//     clickMeButton.removeEventListener("click", handleClick);
//     alert("Click event disabled!");
// });






//Q=5

// document.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {  // Check if the key pressed is "Enter"
//         alert("Enter key was pressed!");
//     }
// });








//Array Question

//Q=1

// let arr=[1,2,3,4,5];
// for(let i=arr.length; i>0; i--){
//     console.log(i);

// }




//Q=2

// let arr=[10,19,15,25,20];
// let max=arr[0];
// let min=arr[0];
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }else if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(max,min);



//Q=3

// let arr=[1,3,2,4,6,5];
// let narr=arr.sort((a,b)=>b-a);
// k=1;
// console.log("max",narr[k-1]);

// let arr=[1,3,2,4,6,5];
// let narr=arr.sort((a,b)=>a-b);
// k=1;
// console.log("min",narr[k-1]);



//Q=4
// let arr4=[1,-2,2,3,-5,4,-6];
// for (let i = 0; i < arr4.length; i++) {
//     for (let j = arr4.length; j >i ; j--) {
//         if(arr4[j]>arr4[j-1]){
//             [arr4[j],arr4[j-1]]=[arr4[j-1],arr4[j]]
//         }
//     }
// }
// console.log(arr4);













//Q=5

// let tamp=[]
// let arr =[8,4,2,1];
// let count=0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]>arr[j]) {
//             tamp.push(arr[i],arr[j])
//             count++;
//         }
//     }
// }

// console.log(count,tamp);









//Q=6

// let arr=[2,4,6];
// let s=0;
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     s=Math.max(arr[i],s+arr[i]);
//     max=Math.max(s,max)
// }
// console.log(max);











//Q=7

// let arr=[1,2,3,5,4,6,7];
// let arr1=arr.sort((a,b)=>b-a);
// n=1;
// console.log(arr1[n-1]);


//Q=8

// let arr=[1,2,3,4,5,6];
// let a=arr[0];
// let b=arr[0];
// for(let i=0; i<=arr.length; i++){
//     if(arr[i]<a){
//         a=arr[i];
//     }else if(arr[i]>b){
//         b=arr[i]
//     }
// }
// console.log(a,b);


//Q=9

// let str="abcccdffes";
// let d1={}
// for(let i=0; i<=str.length-1; i++){
//     if(d1[str[i]]){
//         d1[str[i]]+=1
//     }else{
//         d1[str[i]]=1
//     }
// }
// console.log(d1);




//Q=10

// let arr=[1,2,3,4,5,6,7];
// for(let i=0; i<=arr.length-1; i++){
//     if(arr[i] % 2!==0){
//         console.log(arr[i]);

//     }
// }






















// const m=(...arr)=>{
//     let b=arr.map((e)=>e*e);
//     return b;
// }
// console.log(m(1,2,3,4)); 


// let arr = ["hello", "world"];
// let b = arr.map((e) => e.toUpperCase());
// console.log(b);


// let arr4 = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
// let arr5 = arr4.map((obj) => obj.name);
// console.log(arr5);



// let arr6 = [0, 10, 20, 30, 40];
// let arr7 = arr6.map((temp) => (temp * 9/5) + 32);
// console.log(arr7);





//higerorder function
//filter ex

// const even=(arr)=>{
//     let b=arr.filter((e)=>e%2===0);
//     return b;
// }
// console.log(even([1,2,3,4,5,6]));




// const negtive=(arr)=>{
//     let b=arr.filter((e)=>e>0);
//     return b;
// }
// console.log(negtive([-3, 4, -1, 6, -7, 9]));







// const filterPrimes = arr => arr.filter(n => {
//     if (n < 2) return false;
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) return false;
//     }
//     return true;
//   });


//   console.log(filterPrimes([1,2,3,4,5,6,7,8,9,10])); 






// const fruit=(["apple", "banana", "cat", "strawberry"]);
// const fruit1=fruit.filter((e)=>e.length > 5);
// console.log(fruit1);





// const opj=([{name: "Alice", age: 17}, {name: "Bob", age: 20}]);
// const opj1=opj.filter((person)=>person.age>= 20);
// console.log(opj1);



//map ex

// const m=(arr)=>{
//     let b=arr.map((e)=>e*2);
//     return b;
// }
// console.log(m([1,2,3]));



// let arr6 = [0,25,100];
// let arr7 = arr6.map((temp) => (temp * 9/5) + 32);
// console.log(arr7);



// let extractNames=([{name: "Alice", age: 25}, {name: "Bob", age: 30}]);
// let b=extractNames.map((e)=>e.name);
// console.log(b);





// const hai=(name)=>{
//     b=name.map((e)=>e[0].toUpperCase() + e.slice(1));
//     return b;
// }
// console.log(hai(["hello","world"]));




// const m=(arr)=>{
//     let b=arr.map((e)=>e**2);
//     return b;
// }
// console.log(m([2,3,4]));




// forEach ex.

// const fruit=(fruit1)=>{
//     let b=fruit1.forEach((e)=>console.log(e));
//     return b;



// }
// fruit(["apple", "banana", "cherry"]);




// const sumArray = arr => {
//     let sum = 0;
//     arr.forEach(n => sum += n);
//     return sum;
// };


// console.log(sumArray([1, 2, 3, 4]));


// const countEvenNumbers = arr => {
//     let count = 0;
//     arr.forEach(n => {
//         if (n % 2 === 0) count++;
//     });
//     return count;
// };


// console.log(countEvenNumbers([1, 2, 3, 4, 6]));



// const mation = (arr) => {
//     arr.forEach((str, index) => arr[index] = str + "!");
//     return arr;
// };


// console.log(mation(["hello", "world"]));








//Function Practice

// function prime(num){
//     if(num<=1) return false
//     for(let i=2; i<num; i++){
//         if(num % i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(18));




// function re(str){

//     let a=""
//     for(let i=str.length-1; i>=0; i--){
//         a+= str[i];
//     }
//     return a
// }
// console.log(re("abhishek"));







// function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }



// console.log(factorial(4)); 




// function num(arr){
//     let s=0;
//     for(let i=0; i<arr.length; i++){
//         s+=arr[i]
//     }
//     return s
// }
// console.log(num([1,2,3,4,5]));



// function Palindrome(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return str === [...str].reverse().join('');
// }


// console.log(Palindrome("madam"));
// console.log(Palindrome("hello"));






//Rest and Spread Operators

//q=1

// let arr=[1,2,3];
// let arr1=[4,5,6];
// let arr2=[...arr,...arr1];
// console.log(arr2);






//q=2

// const person = { name: "Alice", age: 25 };

// let pre={...person,age:30};
// console.log(pre);





//q=3

// function num(...arr) {
//     let arr1 = arr.reduce((acc, e) => acc + e, 0);

//     return arr1
// } 
// console.log(num(5, 10, 15, 20));






//q=4

// const numbers = [1, 2, 3, 4, 5, 6];

// const [first,second,...rest]=numbers

// console.log(first);





//q=5

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const obj3={...obj1,...obj2};
// console.log(obj3);




//q=6

// const user = { id: 101, name: "John", role: "Admin" };
// const {role,...remove }=user;
// console.log(remove);




//q=7

// const numbers = [45, 78, 12, 89, 23];
// const num=Math.max(...numbers);
// console.log(num);




//q=8

// function greet(firstName, ...messages) {

//     let n=messages.join(" , ")c
//     console.log(firstName,n);


// }
// greet("Alice", "Hello", "Good Morning", "How are you?");



//q=9
// let x = "apple"; 
// let y = "banana";
// let tamp=x
// x=y;
// y=tamp

// console.log(x);




// q-10

// const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];                               
// console.log([...nestedArr].flat(2));












//15-02-2025



//Q=1

// let arr = [[3, 5, 1], [12, 7, 9], [14, 10, 4]];
// let arr1=arr.flat();
// let k=3
// let arr2=arr.sort((a,b)=>b-a);
// console.log(arr2[k-1]);






//Q=2

// let arr=[1,2,4,5,6];
// let n=6;
// let sum=(n*(n+1))/2
// let m=arr.reduce((e,acc)=>e+acc,0);
// let re=sum-m
// console.log(re);







//Q=3

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3=[...arr1,...arr2];
// console.log(arr3);






//Q=4

// const str = "JavaScript is great and JavaScript is fun!";
// let newstr = str.split(" ");


// let obj = {}

// function words(newstr) {
//     for (let i = 0; i < newstr.length; i++) {
//         if (obj[newstr[i]]) {
//             console.log(newstr[i])
//             break;
//         } else {
//             obj[newstr[i]] = 1

//         }



//     }

// }

// words(newstr)







//Q=5

// const arr = [2, 7, 11, 15];

// function sum(arr,tar) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if (arr[i]+arr[j]==tar) {
//                 console.log([i,j]);
//             }
//         }
//     }
// }

// sum(arr,9)





//20-02-2025
// new Assignment

// function Reverse(arr){
//     let tamp=[];
//     for(let i=arr.length-1; i>=0; i--){
//         tamp.push(arr[i])
//     }
//     return tamp
// }
// console.log(Reverse([1,2,3,4,5,6,7]));







// function maxmin(arr){
//     let max=arr[0];
//     let min=arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }else if(arr[i]<min){
//             min=arr[i]
//         }

//     }
//     console.log(max,min);



// }

// maxmin([1,2,3,4,5]);








// let arr =[2,3,4,5,1,6];
// k=3;
// function find(arr,k) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr.length; j >i; j--) {
//             if (arr[j]>arr[j-1]) {
//                 [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//             }
//         }
//     }
//     console.log(arr[k-1]);


// }

// find(arr,k);





// function nagetive(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=arr.length; j>i; j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(nagetive([-1, 1, 1, -2, -11]));






// function consists(arr) {
//     c1 = 0;
//     c2 = 0;
//     c3 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             c1++
//         } else if (arr[i] === 1) {
//             c2++
//         } else if (arr[i] === 2) {
//             c2++
//         }



//     }
//     for(let i=0; i<arr.length; i++){
//         if(c1>0){
//             arr[i]===0
//             c1--
//         }else if(c2>0){
//             arr[i]===1
//             c2--
//         }else if(c3>0){
//             arr[i]===2
//             c3--
//         }
//     }
//     console.log(arr);

// }
// consists([0, 0, 0, 0, 1,1,1,1, 2, 2, 2]);






// let arr=[2,4,6];
// let s=0;
// let max=arr[0];
// for(let i=0; i<arr.length; i++){
//     s= Math.max(arr[i],s+arr[i])
//     max=Math.max(max,s)
// }
// console.log(max);






// function debv(arr){
//     let temp=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==arr[i+1]){
//             temp.push(arr[i])
//         }
//     }
//     return temp
// }

// console.log(debv([1,1,2,2,3,4,4,5,5,6]));





// let arr=[1, 3, 5, 7]
// let arr1=[0, 2, 6, 8, 9]

// let i=0;
// let j=0;
// while(i<arr){
//     if(arr[i]>arr1[j]){
//         [arr[i],arr1[j]]=[arr1[j],arr[i]]
//     }
//     i++
// }
// let arr3=arr.concat(arr1);
// let arr4=arr3.sort()
// console.log(arr4);













// function inversion(arr){
//     let tamp=[];
//     let count=0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 tamp.push(arr[i],arr[j])
//                 count++
//             }
//         }
//     }
//     return tamp
// }
// console.log(inversion([8,4,2,1]));





// function sum(arr,k){
//     let tamp=[];
//     let count=0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]===k){
//                 tamp.push(arr[i],arr[j]);
//                 count++
//             }
//         }
//     }
//     return tamp
// }

// console.log(sum([7, 1, 5, 3, 6,4],10));





// function marge(arr1,arr2,arr3){
//     let arr4=[...arr1,...arr2,...arr3];
//     return arr4
// }

// const arr1 = [7, 1, 5, 3, 6, 4];
// const arr2 = [1, 3, 6, 8, 3, 0];
// const arr3 = [1, 3, 9, 1, 2, 0];
// console.log(marge(arr1,arr2,arr3));






// function prime(num){
//     if(num<=1) return false
//     for(let i=2; i<num; i++){
//         if(num % i===0) return false
//     }
//     return true
// }
// console.log(prime(89));







// function subarr(arr){
//     let s=arr[0]
//     let max=arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//           s=Math.max(arr[i],s+arr[i])
//           max=Math.max(max,s)
//         }

//     }
//     console.log(max);


// }
// subarr([3,5,9])










// const maxsumsubarray = (arr) => {
//     let mx_sum = arr[0];
//     let current_sum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//     current_sum = Math.max(arr[i], current_sum + arr[i]);
//     mx_sum = Math.max(current_sum, mx_sum);
//     }
//     return mx_sum;
//     };
//     const arr = [1, 2, 4, 5, 6, 2];
//     console.log(maxsumsubarray(arr));





// function a(arr){
//     let arr1=[]
//     for(let i=0; i<arr.length; i++){
//         if(i===0){
//             arr1.push(arr[i])
//         }else if(i===arr.length-1){
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }
// console.log(a([1,2,3,4,5]));







// let arr=[1,2,3,5]
// let n=5;
// let narr=(n*(n+1)/2)
// let sum=0

// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]
// }

// console.log(narr-sum);







// let n1=[[1],[2]]
// let n2=[3,[4,5]];
// let arr1=[...n1,...n2]
// let arr2=arr1.flat()
// console.log(arr2);







// function num(str){
//     let obj={}
//     for(let i=0; i<str.length; i++){
//         if(obj[str[i]]){
//             obj[str[i]]+=1
//         }else{
//             obj[str[i]]=1
//         }
//     }
//     return obj
// }
// console.log(num("aafffeeeeccc"));




//palindroms question
// let str="mam"
// let str1=str.split("").reverse().join("")
// if(str===str1){
//     console.log("palindrom");

// }else{
//     console.log("not palindrom");

// }


// let str="abccccdd"
// let str1=str.split("")
// let obj={}
// let flag=false;
// let length=0
// function palindrom() {


// for(let i=0; i<str1.length; i++){
//     if(obj[str1[i]]){
//         obj[str1[i]]+=1
//     }else{
//         obj[str1[i]]=1
//     }
// }
// for(let key in obj){
//     if(obj[key]% 2===0){
//         length+=obj[key]
//     }else{
//         length+=obj[key]-1
//         flag=true
//     }


// }
// if(flag){
//     length++
// }
// return length
// }
// console.log(palindrom());




// const  Values=(str1)=>{
//     let newArra=str1.split('')
//     let obj={}
//     for (let i = 0; i < newArra.length; i++) {
//     let char= newArra[i]
//     if (obj[char]) {
//     obj[char].push(i);
//     } else {
//     obj[char] = [i];
//     }
//     }
//     let tmp=[]
//     for (const key in obj) {
//     if (obj[key]) {
//     tmp.push(key,obj[key])
//     }
//     }
//     return tmp
//     }
//     let str1="abccccdd"
//     console.log(Values(str1))







// let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// if (obj[arr[i]]) {
// obj[arr[i]]+=1
// }else{
// obj[arr[i]]=1
// }
// }
// for (let key in obj) {
// if (obj[key]===2) {
// console.log(key)
// }
// }





// let str="hello world hello";
// let arr1=str.split(" ");
// let obj={}

// for(let i=0; i<arr1.length; i++){
//     let arr3=arr1[i]
//   if(obj[arr3]){
//     obj[arr3]+=1
//   }else{
//     obj[arr3]=1
//   }
// }
// let tamp=[]
// for(let key in obj){
//     if(obj[key]===2){

//         tamp.push(key)
//     }


// } 

// console.log(tamp);






// function n(array,k){
//   for (let i = 0; i < array.length; i++) {
//     for (let j = array.length-1; j>i; j--) {
//     if (array[j]>array[j-1]) {
//     [array[j],array[j-1]]=[array[j-1],array[j]]
//     }
//     }
//     }

//     return array[k-1]
// }
// let array=[1,2,3,4,5];
// let k=1;
// console.log(n(array,k));


// const buyAndSell = (arr) => {
//     let min = arr[0];
//     let maxProfit = 0;
//     for (let i = 0; i < arr.length; i++) {
//         min = Math.min(min, arr[i]);
//         const profit = arr[i] - min;
//         maxProfit = Math.max(maxProfit, profit);
//     }
//     return maxProfit;
// };
// const arr = [7, 1, 5, 3, 6, 4];
// console.log(buyAndSell(arr));





// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//     let mid = Math.floor((start + (end-start)/2));
//     if (arr[mid] === target) {
//     return mid;
//     } else if (arr[mid] > target) {
//     end = mid - 1;
//     } else {
//     start = mid + 1;
//     }
//     }
//     return -1;
//     }
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     let target = 6;
//     let result = binarySearch(arr, target);
//     console.log(result)












