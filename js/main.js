// Variables
let btn = document.querySelector(".courses .holder button");
let icon = document.querySelector(".courses .holder i");
let addButton = document.querySelector(".add");
let coursesTable = document.querySelector(".courses table tbody")
let cellId = 5;
let calculated = document.querySelector(".calculated")


function calc() {
  // Initializing Inputs
  let hoursInputs = document.querySelectorAll("[name = 'course-hours']");

  // Appearing Elements
  icon.style.display = "inline-block";
  calculated.style.display = "block";

  // Logic

  // Hours
  let arrayOfHours = [];
  hoursInputs.forEach((e) => {
    +e.value > 1 && +e.value < 4 ? arrayOfHours.push(+e.value) : null;
  })
  let totalHours;
  if (arrayOfHours.length > 0) {
    totalHours = arrayOfHours.reduce((p, c) => {
      return p + c;
    });
  }

  // Grades
  let totalPoints = 0;
  for (let i = 1; i < cellId; i++) {
    totalPoints += (document.querySelector(`#grade${i}`).value * document.querySelector(`#hours${i}`).value);
  }

  let gpa = (totalPoints / totalHours).toFixed(3);

  gpaValue.innerHTML = gpa;
}


btn.addEventListener("click", () => {
  calc()
})

// Add New Course
addButton.addEventListener("click", () => {
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let inp1 = document.createElement("input");
  inp1.type = "text";
  inp1.name = "course-name";
  inp1.id = `name${cellId}`;
  inp1.placeholder = "Course Name"
  let cell2 = document.createElement("td");
  let inp2 = document.createElement("input");
  inp2.type = "text";
  inp2.name = "course-hours";
  inp2.id = `hours${cellId}`;
  inp2.placeholder = "Credit Hours";
  let cell3 = document.createElement("td");
  let inp3 = document.createElement("input");
  inp3.type = "text";
  inp3.name = "course-grade";
  inp3.id = `grade${cellId}`;
  inp3.placeholder = "Points";
  cell1.appendChild(inp1);
  cell2.appendChild(inp2);
  cell3.appendChild(inp3);
  row.append(cell1, cell2, cell3);
  coursesTable.appendChild(row);
  cellId++;
})
