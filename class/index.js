class person{

constructor(fname, lname){
	this.fname=fname
	this.lname=lname

}

getName(){

return `${this.fname} ${this.lname} is the full name!`

}



}

const obj1=new person("Shridhant", "J")
console.log(obj1.getName())
