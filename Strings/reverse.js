function reverse(str){
let revstr=""

	for (let i=str.length-1; i>=0; i--){
		revstr+=str[i]

	}
	return revstr

}


const a = reverse("Hello")

console.log(a)
