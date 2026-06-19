const studentDetails={
    taxCal(){
        console.log("10 % of your salary")
    }
}


//Old way
// const student={
//     name:"hasibul Hasan",
//     age:25,
// };
// student.__proto__=studentDetails;

//Modern way
const student = Object.create(studentDetails);
student.name = "hasibul Hasan";
student.age = 25;
student.dept = "Science";
student.taxCal();
console.log(student)



//Class, Object,Constructor,inheritance,this,super
class Car{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }

    start(){
        console.log("Car Starting");
    }

        end(){
        console.log("Car Ending");  
    }
}


class Toyota extends Car{

    constructor(name,price){

        super(name,price);
        
    }
    start(){
        console.log("Toyota Starting");
    }
    end(){
        console.log("Toyota Ending");  
    }
}


class Audi extends Car{

    constructor(name,price){
           super(name,price);
    }
    start(){
        console.log("Audi Starting");
    }
    end(){
        console.log("Audi Ending");  
    }
}

let T=new Toyota("B15 model",12000000);
console.log(T);

let A=new Audi("M610",500000000);
console.log(A);






//Error Handling
const divFun= (x)=>{
    try{
        let result=x/0;
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

divFun(10);


