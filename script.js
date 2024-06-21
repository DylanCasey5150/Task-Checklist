const displayToday = document.querySelector(".display-data-today-main");
const displayTodo = document.querySelector(".display-data-todo-main");
const displayDone = document.querySelector(".display-data-done-main");

/* FETCH JSON DATA */


const getData = () =>{
  return fetch('./user.json')
  .then(res => res.json())
  .then(data=>{
 
   return data;
  })
}


/* DISPLAY TODAY DATA*/ 
const displayTodayData = async () =>{
  const payload = await getData();
  console.log(payload);
 
  
  let dataDisplay = payload.map((object) => {
   const { task, due, importance, queue, notes } = object;

   if(object.queue === "Today"){

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
  });



  displayToday.innerHTML = dataDisplay;
}

displayTodayData();






/* DISPLAY TODO DATA */
const displayTodoData = async () =>{
  const payload = await getData();
  console.log(payload);
 
  
  let dataDisplay = payload.map((object) => {
   const { task, due, importance, queue, notes } = object;

   if(object.queue === "Todo"){

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
  });



  displayTodo.innerHTML = dataDisplay;
}

displayTodoData();











/* DISPLAY DONE DATA*/
const displayData = async () =>{
  const payload = await getData();
  console.log(payload);
 
  
  let dataDisplay = payload.map((object) => {
   const { task, due, importance, notes } = object;

   if(object.queue === "Done"){

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
  });

  displayDone.innerHTML = dataDisplay;
}


displayData();

