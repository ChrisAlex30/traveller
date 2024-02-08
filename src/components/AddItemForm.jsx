import React, { useRef, useState } from 'react'
import Button from './Button';

const AddItemForm = ({handleAdd}) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    handleAdd(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
    <h2>Add an item</h2>
    <input
      ref={inputRef}
      value={itemText}
      onChange={(e) => {
        setItemText(e.target.value);
      }}
      autoFocus
    />
    <Button text="Add to list"/>
  </form>
  )
}

export default AddItemForm