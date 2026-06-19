//Arithmetic operator
let a=100;
let b=40;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

//Exponentiation (**)
a=2;
b=4;
console.log(a**b);

//Unary Operator
let x=20
let y=30
console.log(x++); //20
 console.log(x); //21

console.log(++y); //21
console.log(y) //21

//Assignment Operator
x+=5; //x=x+5
console.log(x) //26
console.log(x*=5); // 130


//Comparison, Logical, Conditional Operator

let m=10;
let n=2;

if(m===n || m<n)
{
    console.log("Equal")
}
else{
    console.log("Not equal")
}
   

if(m!=n && m<n)
{
    console.log("Equal")
}
else{
    console.log("Not equal")
}


//Ternary operator
alert("Carefully enter your input");
let age=prompt();

let result=(age>=18)? "Elligable":"Not Elligable";
console.log(result)


