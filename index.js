let stock = {
  fruite: ["apple", "banana", "orange"],
  vegetable: ["carrot", "tomato", "potato"],
  meat: ["chicken", "pork", "beef"],
  dairy: ["milk", "yogurt", "cheese"],
};
let is_shop_open = true;

// let order =()=>{
//     return new Promise(resolve, reject){
//         if(resolve){

//         }
//         else{
//             reject()
//         }
//     }
// }

// ------------async/await-----------------
// const order = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which topping  you love"));
//     }, 5000);
//   });
// };

// const kitechen = async () => {
//   console.log("kitchen is open");
//   await order();
// };

// kitechen();

// console.log("customer is waiting");
// console.log("All work is done");


// ------------- time fucntion --------

const time =  (ms)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)

            
        }else{
            reject("shop is closed");
        }
    })
}

const kitchen = async ()=>{
    try{
        await time(2000); 
     console.log(`${stock.fruite[0]}`)
    }
    catch{
        console.log("cumstomer is waiting");
    }
    finally{
        console.log("day ended shop is closed")
    }
}

kitchen()