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



Q = 3


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











































































