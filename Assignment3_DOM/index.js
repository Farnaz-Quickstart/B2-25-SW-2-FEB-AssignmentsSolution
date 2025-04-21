const students = [
  { name: "Ali", grade: 88 },
  { name: "Fatima", grade: 92 },
  { name: "John", grade: 75 },
  { name: "Sara", grade: 95 },
  { name: "David", grade: 68 }
 ];

 for (let index=0; index<students.length; index++) {
  let student = students[index]
  // let newParagraph = document.createElement("p")
  // newParagraph.innerHTML = student["name"] + ", <strong>Grade:</strong> " + student["grade"]

  let newListItem = document.createElement("LI")
  newListItem.innerHTML = student["name"] + ", <strong>Grade:</strong> " + student["grade"]
  document.getElementById("studentList").append(newListItem)
 }