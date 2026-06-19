
// Do not use it
var a = 123;
a=345;
var b="345";
console.log(a);
console.log(b);
console.log("Here only compare value so, ",a==b);
console.log("Here compare both value also data type,",a===b);


//Use when value is fixed
const x=1;
if(x===1)
{   // x=2; //cannot update
     console.log(x); //1
}
console.log(x);//1


// Use when value need to be change and in js most of the cases we use let.
let y=1;
if(y===1)
{    y=2; //can update
     console.log(y); //2
}
y=10;
console.log(y); //10
