const courses = ["Js", "Html", "Css", ".Net", "Java"];
let instructerList = [];
let studentList = [];

// insert instructor function
const createInstructor = (firstName, lastName, isActive, inCourses) => {
  const controlCourse = [];
  inCourses.forEach((elementCourse) => {
    if (courses.some((course) => course === elementCourse)) {
      controlCourse.push(elementCourse);
    }
  });

    const insertDate = new Date();
    const updateDate = new Date();

    const obj = {
      id:Date.now(),
      firstName: firstName.trim(),
      lastName: lastName,
      isActive: isActive,
      courses: controlCourse,
      insertDate: insertDate,
      updateDate: updateDate,
    };

    instructerList.push(obj);
    return instructerList;
  }

  const createStudent= (firstName,lastName,isActive,inCourses,studentInstructor)=>{
  const controlCourse = [];

  inCourses.forEach((elementCourse) => {
    if (courses.some((course) => course === elementCourse)) {
      controlCourse.push(elementCourse);
    }
  });

  if (inCourses.length===controlCourse.length){
    //id=1 yazilmasinin sebebi test yapilabilmesidir.
    studentList.push({id:1,firstName,lastName,isActive,inCourses,studentInstructor});
  } 
  else {
    throw "Lutfen gecerli bir egitim giriniz.";
  }

  return studentList; 
}

createInstructor("Orkun ", "Durmaz", "1", ["Js", "Java"]);
createInstructor("Hacer", "Capkin", "1", [".Net", "Css"]);
console.log("instucterList");
console.log(instructerList);

createStudent("Efe","Ozen","1",["Js","Css"],[{firstName:"Orkun",lastName:"Durmaz",isActive:"1",courses:["Js", "Java"],insertDate:new Date(),updateDate:new Date()}])
console.log("studentList");
console.log(studentList);

const getStudentById=(id)=>{
  return studentList.find((student)=>student.id===id);
}
console.log("getStudentById");
console.log(getStudentById(1));

const getStudentByName=(nameOrSurname)=>{
  return studentList.find((student)=>student.firstName===nameOrSurname || student.lastName===nameOrSurname);
}
console.log("getStudentByName");
console.log(getStudentByName("Efe"));
console.log(getStudentByName("Ozen"));

const getStudentByCourse=(course)=>{


}
// console.log("getStudentByCourse");
// console.log(getStudentByCourse("Css"));

