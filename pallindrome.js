const word = "rar"

let rev = ""


console.log("Length:", word.length)

for (let i=word.length-1; i>=0; i--){
rev+=word[i]

	
}

if (word===rev){
console.log("This is a pallindrome")
}
else{

console.log("This is not bro!")
}
