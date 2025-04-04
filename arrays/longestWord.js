const arr=["Hello", "World", "Bear", "TigerFamily", "Peanut"]

let :longest=""

for (let i=0; i<arr.length; i++){

if(arr[i].length>longest.length){

longest=arr[i]
}

}

console.log("The longest word in that array is", longest);
