import React from 'react'
import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

const SideBar = ({handleAdd,handleRemoveAll,handleResettoInitial,markAllAsComplete,markAllAsIncomplete}) => {
    return (
        <div className="sidebar">
          <AddItemForm handleAdd={handleAdd} />
    
          <ButtonGroup handleRemoveAll={handleRemoveAll} handleResettoInitial={handleResettoInitial} 
  markAllAsComplete={markAllAsComplete} markAllAsIncomplete={markAllAsIncomplete} />
        </div>
      );
}

export default SideBar