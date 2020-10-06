document.addEventListener("DOMContentLoaded", () => {

  // save user input
  //submit button sends user input to todos
  // create a nedw node with the user input
  
  const list = document.getElementById("tasks");

  const newListItem = document.getElementById("new-task-description");

  const submit = document.getElementById("submit");

  

  submit.addEventListener('click', function(e){
    const listItemLi = document.createElement('li')
    const innerItem = document.createTextNode(newListItem.value)
    listItemLi.appendChild(innerItem)
    
    list.appendChild(listItemLi)
    const deleteButton = document.createElement('button')
    deleteButton.textContent  = "X"
    deleteButton.id = "delete"
    listItemLi.appendChild(deleteButton)

    

    e.preventDefault();

  })

  // const deletButton = document.getElementById("delete")
  // console.log(deletButton)
  

  // deletButton.addEventListener('click', function (e) {
  //   e.target.parentElement.remove()
  //   console.log(e.target.parentElement)
  //   console.log(deletButton)
  // })



});
