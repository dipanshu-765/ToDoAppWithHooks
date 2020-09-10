import React, { useState, useEffect } from "react";
import Item from "./Item";

const initialValue = ["Camera", "Camping tent", "Charger"];

function Checklist(props) {
  const [checklist, setChecklist] = useState(initialValue);

  function deleteItem(index) {
    const newList = checklist.filter((item) => item !== checklist[index]);
    setChecklist(newList);
  }

  function addItem(){
  setChecklist(checklist.concat(document.getElementById("todo-input").value));
  document.getElementById("todo-input").value = "";
  }

  function cancelItem(index) {
    document.getElementById(`save-btn-${index}`).style.display = "none";
    document.getElementById(`cancel-btn-${index}`).style.display = "none";
    document.getElementById(`input-item-${index}`).style.display = "none";
    document.getElementById(`edit-btn-${index}`).style.display = "inline-block";
    document.getElementById(`delete-btn-${index}`).style.display = "inline-block";
    document.getElementById(`checklist-item-${index}`).style.display = "inline";
  }

  function saveItem(index){
    checklist[index]=document.getElementById(`input-item-${index}`).value;
    setChecklist([...checklist]);
    cancelItem(index);
  }

  return (
    <div id="checklist">
      <div className="ui segment">
        <div className="ui form">
          <input type="text" id="todo-input" placeholder="TO-DO"/>
          <button onClick={addItem} className="btn btn-custom" id="add-todo">Add Item</button>
        </div>
      </div>

      <div className="todo-container">
        <div className="todo-list ui segment">
          <div className="ui list form">
            {checklist.map((item, index) => (
              <Item item={item} index={index} list={checklist} deleteItem={deleteItem} saveItem={saveItem} cancelItem={cancelItem} list={checklist}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checklist;
