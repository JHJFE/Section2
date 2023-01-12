// function compose(func1, func2, num) {
//     // TODO: 여기에 코드를 작성합니다.
//     let i = func2(num);

//     return func1(i);
//   }function studentReports(students) {
// TODO: 여기에 코드를 작성합니다.
function studentReports(students) {
    // TODO: 여기에 코드를 작성합니다.
    let female = students.filter(function (obj){
      return obj.gender === 'female';
    })
    return female.map(function(obj){
  
      let total = obj.grades.reduce(function(acc,cur){
        return acc +cur
      })
      let avg = total/obj.grades.length;
  
       return obj.grades = avg;
    })
  }




let studentList = [
    {
        name: 'Anna',
        gender: 'female',
        grades: [4.5, 3.5, 4],
    },
    {
        name: 'Dennis',
        gender: 'male',
        country: 'Germany',
        grades: [5, 1.5, 4],
    },
    {
        name: 'Martha',
        gender: 'female',
        grades: [5, 4, 4, 3],
    },
    {
        name: 'Brock',
        gender: 'male',
        grades: [4, 3, 2],
    },
];

let output = studentReports(studentList);

console.log(output);