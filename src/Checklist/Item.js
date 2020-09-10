import React from "react";
import ReactDOM from "react-dom";

function Item(props) {
  function editItem(index) {
    document.getElementById(`delete-btn-${index}`).style.display = "none";
    document.getElementById(`edit-btn-${index}`).style.display = "none";
    document.getElementById(`checklist-item-${index}`).style.display = "none";
    document.getElementById(`cancel-btn-${index}`).style.display = "inline-block";
    document.getElementById(`save-btn-${index}`).style.display = "inline-block";
    document.getElementById(`input-item-${index}`).style.display = "inline-block";
  }

  function saveItem(index) {
    const newlist = props.list;
    newlist[index] = document.getElementById(`input-item-${index}`).value;
    console.log(`Item component saveItem returning :${newlist} and ${index}`);
    props.saveItem(newlist, index);
  }

  return (
    <div key={props.index} className="checklist-item item">
      <span className="checklist-item" id={`checklist-item-${props.index}`}>{props.item}</span>
      <input className="input-item" id={`input-item-${props.index}`} type="text" style={{display: 'none'}} defaultValue={props.item}/>
      <button className="btn delete-btn" id={`delete-btn-${props.index}`} onClick={ () => props.deleteItem(props.index)}>Delete</button>
      <button className="btn edit-btn" id={`edit-btn-${props.index}`} onClick={ () => editItem(props.index)}>Edit</button>
      <button className="btn cancel-btn" id={`cancel-btn-${props.index}`} onClick={ () => props.cancelItem(props.index)} style={{display: 'none'}}>Cancel</button>
      <button className="btn save-btn" id={`save-btn-${props.index}`} onClick={ () => props.saveItem(props.index)} style={{display: 'none'}}>Save</button>
    </div>
  );
}

export default Item;
