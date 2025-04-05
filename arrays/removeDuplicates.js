const arr =[1,23,2,1,22,3,34]


function removeDuplicates(a){

return [...new Set(a)]

}


console.log(removeDuplicates(arr))
