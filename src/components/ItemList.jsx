import React from 'react'
import EmptyView from './EmptyView';



const ItemList = ({items,deleteItem,toggleItem}) => {
    return (
        <ul className="item-list">
          {items.length === 0 ? <EmptyView /> : null}

          {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        );
      })}
    </ul>
  )
  
}

function Item({ item, deleteItem, toggleItem }) {
    return (
      <li className="item">
        <label>
          <input
            onChange={() => toggleItem(item.id)}
            checked={item.packed}
            type="checkbox"
          />{" "}
          {item.name}
        </label>
  
        <button 
        onClick={() => deleteItem(item.id)}
        >❌</button>
      </li>
    );
  }

export default ItemList