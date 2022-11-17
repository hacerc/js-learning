const students = [
    "Emre Candemir",
    "Efe Ozen",
    "Suleyman Karaca",
    "Merve Perk Arikan"
  ];
  
  // adresi kopyaladik
  // const newStudents = students;
  
  // newStudents.pop();
  // newStudents.pop();
  
  // newStudents.push("Derin Pecenek")
  
  // console.log("newStudents", newStudents);
  
  // console.log("students", students);
  
  //primitive
  // let name = "Merve";
  
  // let newName = name;
  
  // newName += " Perk Arikan";
  
  //console.log(name, newName);
  
  //spread
  // console.log(...students);
  // console.log(students[0], students[1], students[2]);
  
  // const newStudents = [students[0], students[1], students[2]];
  const newStudents = ["Alper Yilmaz", ...students, "Alp Toker"];
  
  //newStudents.pop();
  
  //console.log(students, newStudents);
  
  const student1 = {
    // key : value
    name: "Arya Acikgoz",
    course: "Frontend Development",
    instructor: "Orkun Durmaz",
    age: 27
  };
  
  const newStudent = { ...student1 };
  
  //console.log({ ...student1, name: "Derin Pecenek", isActive: false });
  
  // ...rest
  const greetAll = (...rest) => rest;
  
  //console.log(greetAll(["Merve", "Omer", "Efe", "Ferhat"]));
  
  //destructre
  const [name1, , , name2] = students;
  
  // const _name1 = students[0];
  // const _name2 = students[1];
  // const _name3 = students[2];
  
  const { course, name, age } = student1;
  
  // const _course = student1.course;
  // const _name = student1.name;
  // const _age = student1.age;
  
  // console.log(name, course);
  