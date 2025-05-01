function isPrime(n){

if (n<2){

console.log(`${n} is not a prime number!`)

}



for(let i=2; i<n; i++){

if (n%i===0){

return `${n} is compostie number!`
}
}
return `${n} is a prime number`

}
const a = isPrime(93)
console.log(a)
