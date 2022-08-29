
const hasDuplicate = (arr) => {
    let set =  new Set();
    let ar = []
    for (let a of arr){
        if (set.has(a)){
            ar.push(a)
        }
        set.add(a)
    }
    return ar
} 

console.log(hasDuplicate([1, 5, -1, 4, 1, 5])); 