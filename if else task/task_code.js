let price;
let purchaseAmount = 60;
if(purchaseAmount>=100) {
    price = purchaseAmount*0.8;
} else if(purchaseAmount>=50 && purchaseAmount<100) {
    price = purchaseAmount*0.9;
} else if (purchaseAmount<50 && purchaseAmount!=0) {
    console.log("No discount");
} else{
    console.log("Invalid Entry");
}
console.log("Discounted Price: "+price);

let hour=19;
if(hour>=5 && hour<=11){
    console.log("Good Morning!");
} else if (hour>=12 && hour<=17){
    console.log("Good Afternoon!");
} else if (hour<0 && hour>23){
    console.log("Invalid Input");
} else{
    console.log("Good Evening");
}

let year = 2000;
if ((year%4 == 0 && year%100 != 0) || year%400 == 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}

let isLoggedIn = true;
let role = "guest";
if (isLoggedIn && role==="admin"){
    console.log("Welcome, Admin");
} else if (isLoggedIn && (role==="editor" || role==="guest")){
    console.log("Welcome, user");
} else if (!isLoggedIn){
    console.log("Please Log In");
} else {
    console.log("Invalid Input")
}

let a=8;
let b=3;
let c=25;
if (a>b && a>c) {
    console.log("a is the biggest");
} else if (b>a && b>c) {
    console.log("b is the biggest");
} else if (c>a && c>b) {
    console.log("c is the biggest");
} else {
    console.log("There is no clear winner!");
}
