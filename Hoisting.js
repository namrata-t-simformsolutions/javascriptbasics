animal();// Javascript allows to call a function before it is created due to hoisting
function animal(){
    console.log("cat");
}
function animal(){
    console.log("dog");
}

//using var keyword
var favfood = "orange";

var foodthoughts = function(){ // storing a function in element
    console.log("original favorite food: "+favfood);//again hoisting will occur in this function
    //hare in this scope of function we have not assign any value to favfood so it will be undefined
    var favfood = "pasta";
    console.log("New fav food: "+favfood);//it will assign the latest pasta

};
foodthoughts();

//instead use const to avoid hoisting


const favfood1 = "pasta";
const foodthoughts1 = function(){ 
    
    console.log("original favorite food: "+favfood1);
    //const favfood1 = "orange";
    console.log("New fav food: "+favfood2);

};
foodthoughts1();

function shape(){
    function triangle(){
        return "area";
    }
    return triangle();
    function triangle(){//hoisting occurs as you redeclare this function
        return "perimeter";//this will print as last stored in memory
    }
}
shape();

