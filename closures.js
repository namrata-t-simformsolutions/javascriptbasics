function product(){
    let product_id = 1 //local variable

var purchase ={
    person: function(){
        //new function scope
        var name = "namrata"
        console.log(name+" has purchased a product "+product_id)
        // Accessing the product id variable from outer function
    }
}// purchase object with a function
return purchase
}
product().person()
//same thing with arrow function
//const product1 = (product_id) => (name) => console.log(name+" has purchased a product "+product_id)

//product1(1)("namrata")

var initialBalance = 300 // Global Scope

function withdraw (amount) {
  /**
   * Local Scope
   * Code here has access to anything declared in the global scope
   */
  var balance = parseInt(initialBalance) - parseInt(amount)

  const actualBalance = (function () {
    const TRANSACTIONCOST = 35
    console.log(balance - TRANSACTIONCOST) /**
     * Accesses balance variable from the lexical scope
     */
  })() // Immediately Invoked Function expression. IIFE
}
withdraw(100)

// prototype Inheritance
 function person(first,last,age){
     this.first = first;
     this.last = last;
     this.age = age
 }
person.prototype.nationality = 'Indian'

var per = new person('namrata','thaker',21)
console.log("she is " +per.first +" "+ per.last+ " an "+ per.nationality) 