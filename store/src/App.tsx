import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from "./components/AddToList"

export interface IState{
  items:{
    name:string,
    price:number,
    url:string,
    description?:string,
    note?:number
  }[]
}

export interface IAddState extends IState{
  items:{
    name:string,
    price:number,
    url:string,
    description?:string,
    note?:number,
    amountInStore:number,
    producerCountry?:string
  }[]
}

function App() {

  const [items, setItems] = useState<IAddState["items"]>([
    {
      name:"Pan",
      price:250,
      url:"data:image/jpeg;base64,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",
      description:"Best Pan Ever!",
      note:9,
      amountInStore: 15
    }
  ])


  return (
    <div className="App">
      <h1>Items that I would like to sell!</h1>
      <List items={items}/>
      <AddToList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
