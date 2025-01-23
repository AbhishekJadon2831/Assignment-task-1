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



// let a = 0;
// let b = 1;

// console.log(a); 
// console.log(b); 

// for (let i = 2; i < 10; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
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






// for (let i = 1; i <= 3; i++) {
//     let row = " ";
//     for(let j=3; j>=i; j--){
//         row+=" "
//     }
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     for (let j = i - 1; j >= 1; j--) {
//         row += j
//     }
//     console.log(row);
// }














































