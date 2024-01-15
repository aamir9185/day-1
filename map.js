let a = [1,2,3,45,6,12]

let multi = a.map((x)=>{
return x*2;
})
console.log(a)
console.log(multi)
let even = a.filter((x)=>{
return x%2 == 0
})
console.log(even)