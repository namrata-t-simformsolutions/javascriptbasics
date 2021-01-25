//object.cerate()
 const displayResults = {
     show(){
         return this.name + " " + this.score
     }
 }

 function marks(name,score){
     let newMarks = Object.create(displayResults)
     newMarks.name=name
     newMarks.score=score
     return newMarks;
 }
 const rohit = marks("rohit",50)
 console.log(rohit.show())
 const ram = marks("ram",80)
 console.log(ram.show())
 
//constructor

function color(name){
    this.name=name
}
const co = new color("red")
console.log(co.name)

//ES6 class
class character{
    constructor(name,weapon){
        this.name=name;
        this.weapon = weapon;
    }
    attack(){ //function inside class
        console.log(this.name+" attack with " + this.weapon+ " of color " + this.color)
    }
}
//inhertance
class pubg extends character{
    constructor(name,weapon,color){
        super(name,weapon)//call base construtor
        this.color=color
    }
}

const ron = new pubg("ron","shotgun","blue")
ron.attack()