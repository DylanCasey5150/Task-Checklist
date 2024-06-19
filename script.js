const display = document.querySelector("#display-data-done-main");

/* FETCH JSON DATA */


const getData = () =>{
  fetch('./user.json')
  .then(res => res.json())
  .then(data=>{
 
   return data;
  })
}

const displayData = () =>{
  const payload = getData();
  console.log(payload);
 
  
  let dataDisplay = payload.map((object) => {
   const { task, due, importance, notes } = object;

  return `
  <li>
  <div class="item item--name">{task}</div>
  <div class="item item--date">{due}</div>
  </li>
  `
  });

  display.innerHTML = dataDisplay;
}


displayData();

