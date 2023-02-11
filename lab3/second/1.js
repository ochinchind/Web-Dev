window.addEventListener('load', () => {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#newtask");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if(!task) {
      alert("fill text");
      return;
    }
    
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_ch = document.createElement("div");
    task_ch.classList.add("check");

    task_el.appendChild(task_ch);

    const task_ch_inp = document.createElement("input");
    task_ch_inp.classList.add("checkbox");
    task_ch_inp.type = "checkbox";
    task_ch.appendChild(task_ch_inp);
    
    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    
    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);


    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_delete_el.innerHTML = "Delete";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);
    input.value = "";

    task_edit_el.addEventListener('click', ()=>{
      if(task_edit_el.innerText.toLowerCase() == "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "Edit";
      }
    })

    task_delete_el.addEventListener('click', ()=> {
      list_el.removeChild(task_el);
    })

    task_ch_inp.addEventListener('click', ()=> {
      if(task_ch_inp.checked){
        task_input_el.style.textDecoration = "line-through";
        task_input_el.style.color = "red";
        task_edit_el.style.display = "none";
        if(task_edit_el.innerText.toLowerCase() == "save") {
          task_input_el.setAttribute("readonly", "readonly");
          task_edit_el.innerText = "Edit";
        }
      }
      else {
        task_input_el.style.textDecoration = "none";
        task_input_el.style.color = "black";
        task_edit_el.style.display = "inline-block";
      }
    })

  })

})