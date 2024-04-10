document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const insertedTask = form.new_task_description.value;
    const newTask = document.createElement("li");
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '&#10004'

    newTask.textContent = insertedTask;
    doneButton.style.marginLeft = '10px';
    newTask.appendChild(doneButton);

    document.querySelector("#tasks").appendChild(newTask);
    form.reset()

    doneButton.addEventListener('click', (e) => {
      e.target.parentNode.remove()
    })
  });
});
