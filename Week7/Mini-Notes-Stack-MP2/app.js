const notes = document.getElementById("notes");
notes.innerHTML = "No Notes Yet";
document.getElementById("clearBtn").disabled = true;
document.getElementById("addBtn").addEventListener("click", function (){
  const input = document.getElementById("input");
  if(input.value != ""){
    if(notes.innerText === "No Notes Yet"){
      notes.innerHTML = "";
      document.getElementById("clearBtn").disabled = false;
    }
      
    notes.innerHTML += `<p>${input.value}</p>`;
    input.value = "";
    input.focus();
    
  }
  else{
    alert("Please add note!");
  }
});

document.getElementById("clearBtn").addEventListener("click", ()=>{
  notes.innerText = "No Notes Yet";
  document.getElementById("clearBtn").disabled = true;
})