import BackgroundHeading from "./components/BackgroundHeading"
import Footer from "./components/Footer"
import Header from "./components/Header"
import  "./App.css"
import ItemList from "./components/ItemList"
import SideBar from "./components/SideBar"
import { useEffect, useState } from "react"

const initialItems = [
  {
    id: 1,
    name: "ready",
    packed: true,
  },
  {
    id: 2,
    name: "passport",
    packed: false,
  },
  {
    id: 3,
    name: "phone charger",
    packed: false,
  },
];

function App() {
  const[items,setItems]= useState(initialItems)

  //const[items,setItems]= useState(()=>JSON.parse(localStorage.getItem("items")) || initialItems)

  const handleAdd=(newItemText)=>{
       const newItem={
        id: new Date().getTime(),
        name:newItemText,
        packed: false,
       }

       setItems([...items,newItem])
  }
  const handleRemoveAll=()=>setItems([])
  const handleResettoInitial=()=>setItems(initialItems)
  const markAllAsComplete=()=>{setItems(items.map((item=>({...item,packed:true}))))}
  const markAllAsIncomplete=()=>{setItems(items.map((item=>({...item,packed:false}))))}
  
  const deleteItem=(id)=>{setItems(items.filter((item=>item.id!==id)))}
  const toggleItem=(id)=>{setItems(items.map((item=>(item.id==id?{...item,packed:!item.packed}:item))))}
  
  const itemsPacked=items.filter((item)=>item.packed).length
  const totalItems=items.length

  // useEffect(()=>{
  //   localStorage.setItem("items",JSON.stringify(items))
  // },[items])

  return (
       <>
                <BackgroundHeading/>
                <main>
                <Header itemsPacked={itemsPacked} totalItems={totalItems} />
                <ItemList items={items} deleteItem={deleteItem} toggleItem={toggleItem}/>
                <SideBar handleAdd={handleAdd} handleRemoveAll={handleRemoveAll} handleResettoInitial={handleResettoInitial} 
                markAllAsComplete={markAllAsComplete} markAllAsIncomplete={markAllAsIncomplete}
                />

                </main>
                <Footer/>
        </>
        )
}

export default App
