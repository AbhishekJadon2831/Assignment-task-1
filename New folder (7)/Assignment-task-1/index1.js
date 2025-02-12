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























































































































