// Difficulty: easy

// Get references to elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
taskList.innerText = "No tasks yet";

// ── TEACHING-BUG #3 (intent) ──
clearBtn.addEventListener("click", function () {
  taskList.innerHTML = "No tasks yet";
});

// Add event listener to addBtn
addBtn.addEventListener("click", function () {
  const task = input.value;

  // ── TEACHING-BUG #6 (logic) ──
  if (task.length > 0) {
    // ── TEACHING-BUG #2 (logic) ──
    if(taskList.innerText === "No tasks yet") taskList.innerText = "";
    taskList.innerHTML += task + "<br>";
    input.value = "";
  }

  // ── TEACHING-BUG #8 (comment) ──
  // This "clears the taskList"
  //input.innerText = "";
});

// TODO: Make the functionality of Clear Button work
// TODO: Handle extra HTML code visible in task list
// TODO: Prevent adding empty tasks
// TODO: Add visual cue for empty task list
