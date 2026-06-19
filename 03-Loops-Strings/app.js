//for loop
for(let i=1; i<=5;i++){
    console.log(i);
}

//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
};

//do while loop 
j=1;
do{
    console.log(j);
    j++;
}while(j<8);





// for of loop-------------use for each element(arraay, map )
let arr=[10,20,30,40,50];
// console.log(arr[[0]]);
// console.log(arr[[1]]);
// console.log(arr[[2]]);
// console.log(arr[[3]]);
// console.log(arr[[4]]);

for(let a of arr){

    console.log(a);
}



//for in loop----------------use for  element(Object)
const students={
    name: "Mohammad Hasibul Hasan",
    University: "BUBT",
    Age: 25
};

// console.log(students.name);
// console.log(students.University);
// console.log(students.Age);

for(let s in students)
{
    console.log(s, ":", students[s]);
}





//String
let str="   Hello  dear    ";  //2 space
console.log(str);
console.log(str.length);
console.log(str.trim()); // cut before and after all space 
console.log(str.charAt(6)); //l
console.log(str[6]); //l


//Template Literal
let firstName="Mohammad Hasibul";
let lastName="Hasan";

console.log("My first name is ",firstName,"and \n last name is ",lastName,".");
let literar=`My first name is ${firstName} also last name is ${lastName}.`;
console.log(literar);
