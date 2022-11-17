// const getRequest=(url)=> {
//  return new Promise((resolve, reject) => {
//     const request= new XMLHttpRequest()
//     request.addEventListener("readystatechange",()=>)
//  })
// }

// const api="https://jsonplaceholder.typicode.com/"
// fetch(api+"users").then(res=> res.json())
// .then((json)=>{
//    fetch(api+"todos",{
//    method:"POST",
// body:JSON.stringify(json[0]),
// headers:{"Content-type":"application/json; charset=UTF-8"
// }
// // }).then(res=>res.json())
// // })

//endpoint bizim bizim data source muz. ordan donen responselara gore bizim akisimiz duzenleniyor.
// promise yapisi aslinda bir nevi callback hellden cikmak icin kullanilir bizlere response or reject doner. 
const api="https://jsonplaceholder.typicode.com/"
const createToDo=async()=>{
   const response=await fetch()
}

const getAllPosts=async()=> {
   const data=await fetch(api+ "posts")
   const responseData=await data.json()
   return responseData
}
console.log (getAllPosts())

const getAllToDo=async()=> {
   const data=await fetch(api+"todos")
   const responseData=await data.json()
   return responseData
}
console.log(getAllToDo());

const getToDoById=async(id)=> {
   const data=await fetch(api+"todos/"+id)
   const responseData=await data.json()
   return responseData
}
getToDoById().then((data)=>console.log(data))

const getAllUsers=async()=>{
   const data=await fetch(api+"users")
   const responseData=await data.json()
   return responseData
} 
getAllUsers().then((data)=>console.log(data))


