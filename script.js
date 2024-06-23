const displayToday = document.querySelector(".display-data-today-main");
const displayTodo = document.querySelector(".display-data-todo-main");
const displayDone = document.querySelector(".display-data-done-main");

//Display Today form
const displayTodayFormContainer = document.querySelector('.add-item-today-form-container');
const displayTodayForm = document.querySelector(".add-item-today-button");

//Add Today Form
const addTaskFormEl = document.querySelector(".add-item-form");

/* FETCH JSON DATA */


const getData = () => {
  return fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
      
      return data;
    })
}


const getHTMLFromTodoItem = ({ task, due, importance, notes }) => {
  return `
  <li>
  <div class="item item--name">${task}</div>
  <div class="item item--date">${due}</div>
  <div class="item item--date">${importance}</div>
  <div class="item item--date">${notes}</div>
  <button class="edit-item-button">Edit</button>
  </li>
  `
}

const renderTodoListItemsToScreen = async() =>{
  const payload = await getData();
  
  const checkListItemsForToday = payload.filter(item => item.queue === "Today").map(item => getHTMLFromTodoItem(item)).join('');
  displayToday.innerHTML = checkListItemsForToday;
  
  const checkListItemsForTodo = payload.filter(item => item.queue === "Todo").map(item => getHTMLFromTodoItem(item)).join('');
  displayTodo.innerHTML = checkListItemsForTodo;

  const checkListItemsForDone = payload.filter(item=> item.queue === "Done").map(item => getHTMLFromTodoItem(item)).join('');
  displayDone.innerHTML = checkListItemsForDone;

}

renderTodoListItemsToScreen();


//SHOW ADD ITEM FORM

const displayFormToday = () => {
  displayTodayFormContainer.style.display = "block";
  }
displayTodayForm.addEventListener('click',displayFormToday);










//ADD ITEM TODAY FORM POST REQUEST


addTaskFormEl.addEventListener('submit',handleSubmit);


function handleSubmit(event){
  event.preventDefault();
  let formData = new FormData(addTaskFormEl);
  let data = Object.fromEntries(formData);
  let jsonData = JSON.stringify(data);
  console.log(jsonData);

  
  fetch('http://localhost:3000/tasks', {
    method: 'POST',
    headers :{
    'Content-Type':'application/json'
  },
  body: jsonData
}).then(res => res.json())
.then(result => console.log(result))
.catch(err => console.log(err))

}

