const arr = ["apple", "banana", "apple", "mango", "apple"]

let counts={}

for (let i=0; i<arr.length; i++){
counts[arr[i]]=(counts[arr[i]] || 0)+1;

}
console.log(counts)



