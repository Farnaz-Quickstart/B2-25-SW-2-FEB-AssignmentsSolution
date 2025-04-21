const students = [
  { name: "Ali", grade: 88 },
  { name: "Fatima", grade: 92 },
  { name: "John", grade: 75 },
  { name: "Sara", grade: 95 },
  { name: "David", grade: 68 }
 ];

 for (let index =0 ; index < students.length; index++) {
  let student = students[index]
  console.log (student["name"])
  console.log (student["grade"])

  let newParagraph = document.createElement ("p")
  newParagraph.innerHTML = student["name"] + ", <strong>Grade:</strong> " + student["grade"]

  document.getElementById ("divStudent").append(newParagraph)

 }

