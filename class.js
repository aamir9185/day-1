//blueprint for the object 
class Animal{
    constructor(name,legs,speaks){
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
speak(){
    console.log(`Hi ${this.speaks}`);
}
greet(){
    console.log(`Hi i am ${this.name}`)
}
walk(){
    console.log(`I walk in ${this.legs} legs`);
}
static who(){
    console.log("Animal") //belongs to the class exclusively not to the object
}
}
let dog = new Animal("dog",4,"bhaw bhaw") //creaitng the object
//calling the object
dog.greet()
dog.walk()
dog.speak()
console.log("\n")

let cat = new Animal("cat",4,"meow")
dog.greet()
dog.walk()
dog.speak()
