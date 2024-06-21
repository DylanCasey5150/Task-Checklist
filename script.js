const displayToday = document.querySelector(".display-data-today-main");
const displayTodo = document.querySelector(".display-data-todo-main");
const displayDone = document.querySelector(".display-data-done-main");

/* FETCH JSON DATA */


const getData = () => {
  return fetch('./user.json')
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
  displayDone.innerHTML = checkListItemsForTodo;

}

renderTodoListItemsToScreen();





