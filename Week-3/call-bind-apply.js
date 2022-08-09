
let obj = {
    firstName: "Sam",
    lastName: "Jones"
  }
  
  function fullName(food){
    return this.firstName + " " + this.lastName + " likes " + food
  }
  
  // bind
  let fn = fullName.bind(obj)
  console.log(fn('coffee'))
  
  // call
  console.log(fullName.call(obj, 'icecream')) 
  
  // apply
  console.log(fullName.apply(obj, ['chocolates']))
  