function w()//global func
{
    var a = "a";
    //console.log(c);//local variable can not be accesed otside the scope
    return function x(){ 
        var b = "b"; //local 
        return function k() {
            var c=10;
            console.log(c);
            return "Namrata";
        }
    }
}
w()()();

//use of call()
const player1 = {
    name: "virat",
    runs: 60,
    score(num1,num2){
        return this.runs +=num1+num2;
    }
}

const player2 = {
    name:"dhoni",
    runs: 50
}
console.log("1",player1);
console.log("2",player2);
player1.score.call(player2,20,40);
console.log("3",player2);

//Higher order function
const giveAccessTo = (name) =>{
    console.log("Access Granted to "+ name)
}
 function authenticate(verify){
     let array = [];
     for(let i=0;i<verify;i++)
     {
        array.push(i);
     }
     return true;
 }
 function letPerson(person,fn){
     if(person.level=='admin'){
         fn(5000000)
     }else if(person.level=='user'){
         fn(1000000)
     }
     return giveAccessTo(person.name)
 }
 letPerson({level: "admin", name:"namrata"},authenticate)

 //optimized code for multiplying 2 num with arrow function

 const multiplyBy = (num1) => (num2) => console.log("Ans "+ num1*num2)

 multiplyBy(2)(6)