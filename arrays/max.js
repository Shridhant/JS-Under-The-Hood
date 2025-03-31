const arr=[232,112,31,33,1223]


let max=0;
let min=0;

for (let i=0; i<=arr.length; i++){

if(arr[i]>max){
max=arr[i]

}
if(arr[i]<min){
min=arr[i]
}


}

console.log("original array:", arr)
console.log("This is the max:",max)
console.log("This is the min:",min)
