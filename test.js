const arr = [4,52,22,33,49]

for (let i=0; i<arr.length; i++){
	if (arr[i]%2==0){
		if(arr[i]==4){
				console.log("This is 4")
		}
		console.log("This is even", arr[i])
	}
	else{
		console.log("This is odd", arr[i])
	}

}


