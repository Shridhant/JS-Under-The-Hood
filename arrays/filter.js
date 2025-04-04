const arr =[1,3,"Hello",2,"Yo"]

for (let i=0; i<arr.length; i++){
		if (typeof(arr[i])==="string"){
			console.log("This->",arr[i], "a string")
		}
		else{
			console.log(arr[i], "is a number")
			}
		}	

