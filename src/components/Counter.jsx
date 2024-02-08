import React from 'react'

const Counter = ({itemsPacked,totalItems}) => {
    return (
        <p>
          <b>{itemsPacked}</b> / {totalItems} items packed
          
        </p>
      );
}

export default Counter