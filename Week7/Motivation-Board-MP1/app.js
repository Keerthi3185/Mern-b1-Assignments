function showNote(){
  const note = document.getElementById("note");
  const board = document.getElementById("board");
  board.innerHTML += note.value + "<br>";
  board.style.fontSize = "30px";
}

function clearBoard(){
  const board = document.getElementById("board");
  board.innerText = "";
}

function makeBold(){
  const board = document.getElementById("board");
  board.style.fontWeight = "bold";
}

function tryHTML() {
  const board = document.getElementById("board");
  const note = document.getElementById("note");
  board.innerHTML += note.value + "<br>";
}