const arr= [1,2,3,4,42,12]

let a = []
let b=[]

for (let i=0; i<arr.length; i++){

a.push(arr[i]*2)



}
console.log("After mapping into 2 :",a)

	for (let i=arr.length-1; i>=0; i--){

b.push(arr[i])
}
console.log("The reversing", b)

