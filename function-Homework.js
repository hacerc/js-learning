const students = [
    "Orkun Durmaz",
    "Alper Yılmaz",
    "Arya Açıkgöz",
    "Efe Özen",
    "Ferhat Yıldırım",
    "Tunahan Demiröven",
    "Emre Candemir",
    "Eyüp Eymen Eruyar",
    "Deniz Akgünlü",
    "Ömer Faruk Çelik",
    "Kasım Alp Toker",
    "Merve Perk Arıkan",
    "Derin Peçenek",
    "Hacer Çapkın",
    "Neslihan Kayıs",
    "Süleyman Karaca",
  ];

  const reverseArray = (array)=> {
     const reversedArray = [];
   for(let i=array.length-1; i>=0; i--) {
    reversedArray.push(array[i]);
   
   }
  return reversedArray;
  }
  // reverseArray(students);
  const getOddAndEvenIndexStudents =(array)=> {
    const oddIndex= [];
    const evenIndex= [];
    for (let i=0; i<array.length;i++){
        if (i%2===0) {
            evenIndex.push(array[i]);
        } else {
          oddIndex.push(array[i]);
        }
    }
  }


  const thirdName=(array)=> {
    const morethanthreename=[];
    for (let i=0; i<array.length;i++) {
     
      if ( array[i].split(" ").length>=3) {
        morethanthreename.push(array[i]);
        console.log(array[i])
      }

    }
    return morethanthreename;
  }
  
  // thirdName(students);

  const nameAndSurname=(array)=> {
  const names=[];
  const surNames=[];
  let name="";
  let spaceIndex;
  for (let i=0; i<array.length;i++){
    name=array[i];
    spaceIndex=name.lastIndexOf(" ");
    surNames.push(name.substring(spaceIndex+1,name.length))
    names.push(name.substring(0,spaceIndex))


  }
  return [surNames,names];
  }

//   nameAndSurname(students);

// console.log (nameAndSurname(students));


//   const forLoopExample=()=> {
//     for(let i=0;i<=100;i++) {
//       console.log(i)
//     }
//   }

//  forLoopExample();

const whileLoopExample=()=> {
  let i=0;
while (i<=100){ 
  if (i%2===0){
console.log("cift sayi "+i);

  } else {
    console.log("tek sayi "+i);
  }

}
i++;
}
whileLoopExample();





  // const flowerShop= ["rose","peony","daisy","elderberry","lavender"];
  // const reverseArr=(arr,callback)=> {
  //   for (let i=0; i<arr.length;i++) {
  //       callback (arr[i]);
  //   }
  // }
  //  const callFlower= (a)=> {
  //   console.log(a);
  //  }

  // reverseArr(flowerShop,callFlower);