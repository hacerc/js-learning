const students = [
    "Emre Candemir",
    "Efe Ozen",
    "Suleyman Karaca",
    "Merve Perk Arikan"
  ];
  
  const mapResult = students.map((student, index) => `${index + 1} - ${student}`);
  //console.log(mapResult);
  
  const studentList = [
    {
      name: "Arya Acikgoz",
      course: "Frontend Development",
      instructor: "Orkun Durmaz",
      age: 27
    },
    {
      name: "Alp Toker",
      course: "Frontend Development",
      instructor: "Orkun Durmaz",
      age: 29
    },
    {
      name: "Eymen Eruyar",
      course: "Frontend Development",
      instructor: "Orkun Durmaz",
      age: 25
    },
    {
      name: "Hacer Capkin",
      course: "Frontend Development",
      instructor: "Orkun Durmaz",
      age: 22
    }
  ];
  
  const getAgeFromStudentObj = (student, index) => `${index} - ${student.age}`;
  
  // console.log(
  //   studentList.map((student, index) => `${index} - ${student.name}`)
  //   )
  
  // console.log(getAgeFromStudentObj(studentList[0]));
  // console.log(getAgeFromStudentObj(studentList[1]));
  // console.log(getAgeFromStudentObj(studentList[2]));
  // console.log(getAgeFromStudentObj(studentList[3]));
  
  console.log(studentList.forEach((studentObj) => console.log(studentObj)));
  
