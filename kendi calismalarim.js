var actor= {
    name: "Robin Willliams",
    age: 63,
    childs: ["Zelda","Zachary","Cody"],
    movies: ["Olu Ozanlar Dernegi", "Super Nanny"],
};

console.log (actor[2]);
const newActor={...actor}
// console.log(actor,newActor);
// const childs=[...actor.childs];
const childs=actor.childs
actor.childs.pop()
console.log(actor.childs);
console.log(childs);






const flowerShop = [
    {
    name:"rose",
    colour:"red",
    smell: true,
    family:"rose",
    stockStatus: true
    },
    {
      name:"peony",
      colour:"pink",
      smell:true,
      family:"PEONY",
      stockStatus:false
    },
    {
      name:"cactus",
      colour:"green",
      smell:true,
      family:"cactus",
      stockStatus:true
    }
    ]
    
    // const newFlowerShop = ["rose", ...flowerShop, "cactus"];
    // console.log(flowerShop,newFlowerShop);


    // flowerShop.forEach(  (item)=>{console.log(item);
    // })
    
    // flowerShop.forEach( (item)=>{
    //     if (item.stockStatus===true) {
    //         console.log(item);
    //     }
    // }) 

// flowerShop.map((item)=> {
//     if (item.stockStatus===true){
//         return 5;

//     }

// })
// console.log(flowerShop.map((item)=> {
//     return 5;

// }))

// const restLearn =(...arr)=>{
//   console.log (arr)
// }
// restLearn(1,2,3,4,5,"birsey")
//en son element rest olabilir. ilk element olmaz, fonksiyonlarda olur.

//spread

// let isim=["javaScript","rastgele"]
// let string= ["alperler",...isim,"IKINCI YENILER"]
// string[1]="F";
// isim[0]="C";
// console.log(string);
// console.log(isim);

//dom examples



