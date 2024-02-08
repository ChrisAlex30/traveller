import React from 'react'
import Button from './Button';

const ButtonGroup = ({handleRemoveAll,handleResettoInitial,markAllAsComplete,markAllAsIncomplete}) => {
    const secondaryButtons = [
        {
          text: "Mark all as complete",
          onClick: markAllAsComplete,
        },
        {
          text: "Mark all as incomplete",
          onClick: markAllAsIncomplete,
        },
        {
          text: "Reset to initial",
          onClick: handleResettoInitial,
        },
        {
          text: "Remove all items",
          onClick: handleRemoveAll,
        },
      ];
    return (
        <section className="button-group">
          {secondaryButtons.map((button,index) => (
            <Button
              key={index}
              text={button.text}
              onClick={button.onClick}    
              buttonType="secondary"
            />
          ))}
        </section>
      );
}

export default ButtonGroup