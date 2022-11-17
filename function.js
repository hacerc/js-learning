//hoisting, this calisir
function greetPerson(name) {
    return `Hello ${name}`;
  }
  
  greetPerson("Ferhat");
  
  // function getSquare(num) {
  //   return num * num;
  // }
  
  //function expression, hoisting calismaz
  const getSquare = function (num) {
    return num * num;
  };
  
  //Arrow Function, hoisting calismiyor, this
  const getCube = (num) => num * num * num;
  
  console.log(getCube(3));
  