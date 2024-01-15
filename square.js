function square(a) {
    return a*a;
}
function cube(a){
return a*a*a
}
function sumOfSomething(num1,num2,callback) { //aming the code more reusable by using the callback
    const val1 = callback(num1); //callback
    const val2 = callback(num2);
    return val1 + val2;
}

console.log(sumOfSomething(2,2,square))
console.log(sumOfSomething(2,2,cube))
console.log(sumOfSomething(2,2,(a)=>{  // another way of writing the callback
    return a*3
}));