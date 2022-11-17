//rest
const concatWords = (...words) => {
    let concattedWords = "";
    for (let index = 0; index < words.length; index++) {
      concattedWords += words[index];
    }
    return concattedWords;
  };
  
  const greet = (callbackFunction, ...words) => {
    const greetSentence = "Hello " + callbackFunction(...words);
    return greetSentence;
  };
  
  // console.log(greet(concatWords, "Eymen", "Omer", "Hacer"));
  
  greet(
    (...words) => {
      let concattedWords = "";
      for (let index = 0; index < words.length; index++) {
        concattedWords += words[index];
      }
      return concattedWords;
    },
    "Eymen",
    "Omer",
    "Hacer"
  );
  
  //console.log(greet((...args) => args.slice(0), "Eymen", "Merve"));
  
  const students = [
    "Emre Candemir",
    "Efe Ozen",
    "Suleyman Karaca",
    "Merve Perk Arikan"
  ];
  
  const customMap = (arr, callbackFunc) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      callbackFunc(element, index);
    }
  };
  
  //                                                      ternary if
  // customMap(students, (student, index) =>
  //   index % 2 === 0 ? console.log(student) : null
  // );
  // customMap(students, (student, index) => !(index % 2) && console.log(student));
  
  const logEvenIndex = (element, index) => {
    // if (index % 2 === 0) {
    //   console.log(element);
    // }
  
    //       0: false => ! ile tersine cevir
    // if (!(index % 2)) {
    //   console.log(element);
    // }
  
    // index % 2 === 0 ? console.log(element) : null
  
    // !(index % 2) ? console.log(element) : null;
  
    !(index % 2) && console.log(element);
  };
  
  customMap(["Derin", "Alp", "Merve", "Alper"], logEvenIndex);
  