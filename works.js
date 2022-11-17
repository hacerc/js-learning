// const reverseNumber = (number) => {
//   const isNegative = number < 0 ? true : false;
//   if (isNegative) {
//     number = number * -1;
//   }
//   let reversedNumber = 0;
//   while (number > 0) {
//     reversedNumber = reversedNumber * 10 + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return isNegative ? reversedNumber * -1 : reversedNumber;
// };
// console.log(reverseNumber(1201));

// const reverse = (x) => {
//   const isNegative = x < 0 ? true : false;
//   if (isNegative) {
//     x = x * -1;
//   }
//   let reversed = 0;
//   while (x > 0) {
//     reversed = reversed * 10 + (x % 10);

//     x = Math.floor(x / 10);
//   }
//   return isNegative ? reversed * -1 : reversed;
// };

// // console.log(reverse(354));
// //nazan , ece , sasaXasas
// const isPalindromString = (palindrom) => {
//   if (palindrom.length <= 1) {
//     return undefined;
//   }
//   for (let index = 0; index < palindrom.length / 2; index++) {
//     if (palindrom[index] !== palindrom[palindrom.length - 1 - index]) {
//       return false;
//     }
//   }
//   return true;
// };

// // console.log(isPalindromString("N"));

// const capitalizeFirstLetter = (excalibur) => {
//   return (excalibur = excalibur[0].toUpperCase() + excalibur.slice(1));
// };

// const capitalizeString = (excalibur) => {
//   const str = excalibur.trim().split(" ");
//   let strs = "";
//   for (let index = 0; index < str.length; index++) {
//     strs += " " + capitalizeFirstLetter(str[index]);
//   }
//   return strs;
// };

// console.log(capitalizeString("Hacer CAPKIN"));///Hacer CAPKIN

// const maxNum = (arr) => {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(maxNum([1,2,3,4,5,7,6]));

// const reversedNumber=(num)=> {
//  const stringNumber= num.toString();
//  const numbers=[...stringNumber].reverse().join("");
//  return Number(numbers);
// }
// console.log(reversedNumber(1988))

// const palindrom=(kelime)=>{
//   kelime= kelime.split(" ").join ("");

//   const array=[...kelime];
// let response=array.every((item,index,array)=>item !==array[array.length-1-index])
//   return response;
// }
// console.log(palindrom("nazan"));

const studentList = [
  {
    name: "Arya Acikgoz",
    course: "Frontend Development",
    instructor: "Orkun Durmaz",
    age: 27,
    score: 100,
  },
  {
    name: "Alp Toker",
    course: "Frontend Development",
    instructor: "Orkun Durmaz",
    age: 29,
    score: 65,
  },
  {
    name: "Eymen Eruyar",
    course: "Frontend Development",
    instructor: "Orkun Durmaz",
    age: 25,
    score: 85,
  },
  {
    name: "Hacer Capkin",
    course: "Frontend Development",
    instructor: "Orkun Durmaz",
    age: 22,
    score: 100,
  },
];

//1.soru
const collectedStudentsReduce = studentList.reduce(
  (studentNames, currentStudent) => {
    return [
      ...studentNames,
      [currentStudent.name, currentStudent.age, currentStudent.score],
    ];
  },
  []
);
//bos array koyduk cunku; baslangic objeni belirtmek icin.spread olabilmesi icin yazman lazim.

console.log(collectedStudentsReduce);

//2.soru
console.log(
  studentList.reduce((studentInfo, student) => {
    return [...studentInfo, [student.name, student.age]];
  }, [])
);

//3.soru
const collectName = studentList.reduce((totalStudent, student) => {
  return { ...totalStudent, [student.name]: student.age };
}, {});
console.log(collectName);

//every her birine bakar biri uymuyorsa false doner. some methodunda ise kosullardan birinin saglanmasi yeterli.
 const isStudentOld=studentList.every(({age})=>{
  return age>18
})
console.log(isStudentOld);

//filter
const studentAge=studentList.filter((student)=>student.age>18 && student.score>80)
console.log("filter")
console.log(studentAge)

//farkli ornek
const numbers = [8, 5, 9, 7, 11, 20, 65, 18, 87, 21];
const sum = numbers.reduce((totalNumber, number) => {
  if (number % 2 === 0) {
    return totalNumber + number;
  }
  return totalNumber;
});
console.log(sum);

//modunu almak bir seyin kalanina bakmak.

//callback her eleman icin o fonksiyonu uygula.

const flowerShop = [
  "rose",
  "sculent",
  "orcid",
  "rose",
  "peony",
  "sculent",
  "rose",
];
const flower = flowerShop.reduce((totalFlower, flower) => {
  totalFlower[flower] = (totalFlower[flower] || 0) + 1;
  return totalFlower;
}, {});
console.log(flower);

//kodlarini duzelt shift alt f 