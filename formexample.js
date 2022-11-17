// const buttonSubmit = document.querySelector("button[type=submit]");
// buttonSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const firstName=document.querySelector("input")
// });


const api="https://jsonplaceholder.typicode.com/"
// fetch(api+"users").then(rest =>rest.json()).then(data => console.log(data))
const getAllUsers=async()=>{
  console.log("ASEKRON CALISTIM KARNIM ACIKTI");
  const response=await fetch(api+"users")
  const data=await response.json()
  return data
}
console.log(getAllUsers().then(data=>console.log(data)));




for (let index = 0; index < 1000; index++) {
  console.log("forloop : "+index);
}
