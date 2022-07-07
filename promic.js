document.write("hello world")


let stock = {
    fruite :["apple", "banana", "orange"],
    vegetable : ["carrot", "tomato", "potato"],
    meat : ["chicken", "pork", "beef"],
    dairy : ["milk", "yogurt", "cheese"]
}
let is_shop_open = false;
let order = (time, work)=> {


    return new Promise((resolve,reject)=>{
        if(is_shop_open){

            setTimeout(()=>{
                resolve(work());

            },time)
        }
        else{
            reject(console.log("shop is closed"));
        }
    })
}

order(2000,()=> console.log(`${stock.fruite[0]} was selected`))
.then(()=>{
    return order(0000, ()=> console.log("Prodection hass started"))
})
.then(()=>{
   return order(2000, ()=> console.log("the fruite was chopped"))

})
.then(()=>{
  return  order(1000,()=>{

      console.log( `${stock.dairy[0]} was selected   and ${stock.dairy[1]} selected`) 
  }
  
  )
})
.then(()=>{
    return order(1000, ()=> console.log("Start the machine"))

})
.then(()=>{
    return order(1000, ()=> {
        console.log(`ice cream ${stock.meat[0]} was selected`)
    })
})
.then(()=>{
    return order(1000, ()=> {
        console.log(`${stock.dairy[0]} was selected`)
    })
})
.then(()=> {
    console.log("order is complete")
})

.catch(()=>{
console.log("customer is not happy")
})