import React from 'react'
import Logo from './Logo'
import Counter from './Counter'

const Header = ({itemsPacked,totalItems}) => {
  return (
    <header>
    <Logo />
    <Counter
     itemsPacked={itemsPacked}
     totalItems={totalItems}
    />
  </header>
  )
}

export default Header