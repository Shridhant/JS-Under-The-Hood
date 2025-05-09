const arr = [4,5,44,45,68,12]


Array.prototype.myMap=function(userfn){
	const result = []
		for(let i=0; i<this.length; i++ ){

			const value=(userfn(this[i], i))
			result.push(value)
		}
	


	return result

}

const a=arr.myMap(e=>e*2)
console.log(a)
console.log([1,,3])
