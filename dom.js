console.log(document.querySelector("#hello-dom").innerHTML);
const allListItem = document.querySelectorAll("li");
console.log(allListItem);

const addList = document.querySelector("ul");
const flowerShop = ["rose", "peony", "cactus", "elderberry", "lemontree"];
flowerShop.forEach((flower) => {
  addList.innerHTML += `<li>${flower}<li>`;
});
console.log(allListItem);

document.querySelector("ul").style.color = "red";

// const buttonArea=document.querySelector("div")
// console.log(buttonArea)
// const myButton=document.createElement("button")
// buttonArea.appendChild(myButton)
// myButton.style.color='blue'
// myButton.style.fontSize='10px'
// myButton.textContent='merhaba'
// myButton.id='btn'
// myButton.className='isimsiz'

// myButton.addEventListener("click",()=>{
//     document.querySelectorAll("p").style.color='pink'
// })

// addList.forEach((li))
// li.addEventListener("click",(e)=>{
//     li.classList.toggle()
// } )

//id cagirilirken #
//class cagirilirken .
//tum sayfadaki html tagini etkileyeceksek dogrudan tag ismiyle cagiracagiz.
// queryselector uygun olan ilk itemi getirir o sebebple hepsini secmek istersek querySelectorAll diye yazmaliyiz.

//inner teext okunabilir olanlari degistirir metinleri. text content ise hepsini degistirir.
document.querySelector("#hello-dom").innerHTML += `Hacer`;

//querySelector
const firstPtag = document.querySelector("p");

//console.log(firstPtag)

const textSecondary = document.querySelector(".text-secondary");

// console.log(textSecondary)

//querySelectorAll
const allPtags = document.querySelectorAll("p");
// console.log(allPtags);

// allPtags.forEach(p => console.log(p))

//getElementById
const helloDom = document.getElementById("hello-dom");
// console.log(helloDom);

//getElementsByClassName
const allTextSecondaries = document.getElementsByClassName("text-secondary");
// console.log(allTextSecondaries);

//getElementsByTagName
const allListItems = document.getElementsByTagName("li");
// console.log(allListItems)

const underlineText = document.querySelector(".text-primary");
console.log(underlineText);
underlineText.setAttribute("style", "text-decoration:underline");
underlineText.innerHTML += `<h1>kaslarinin arasina dom dom kursunu degdi.<h1>`;
underlineText.addEventListener("click", () => {
  // underlineText.setAttribute("style","color:pink")
  underlineText.classList.toggle("change-color");
});

const newElement = document.createElement("li");
newElement.textContent = "sadece annemi dusunuyorum.";
underlineText.append(newElement);

const button = document.querySelector("button");
const studentList = [];
const newDiv = document.createElement("div");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const namex = document.querySelector("#name").value;
  const snamex = document.querySelector("#surname").value;
  const score = document.querySelector("#score").value;
  studentList.push({
    name: namex,
    surname: snamex,
    score,
  });
  console.log(namex + "===" + score + "===" + snamex);
  studentList.forEach((student) => {
    const pTag = document.createElement("p");
    pTag.innerText = `Ogrenci Adi : ${student.name}`;
    pTag.innerText =`Ogrenci Soyismi : ${}`
    newDiv.append(pTag);
  });

//   newDiv.innerHTML += `<p>Ogrenci Adi : ${namex}</p>`;
//   newDiv.innerHTML += `<p>Ogrenci Soyismi : ${snamex}</p>`;
//   newDiv.innerHTML += `<p>Aldigi Not : ${score}</p>`;
  document.body.appendChild(newDiv);
});
