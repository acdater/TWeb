import React, { useState } from "react";
import {IAddState as Props} from "../App"
import { Button } from "antd"
import { parseJsonText } from "typescript";

interface IPropos {
    items: Props["items"]
    setItems:
        React.Dispatch<React.SetStateAction<Props["items"]>>
}

const AddToList : React.FC<IPropos> = ({items, setItems}) => {

    const [input, setInput] = useState({
        name:"",
        price:"",
        img:"",
        description:"",
        note:0,
        amountInStore:0,
        producerCountry:"unknown"
    })

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput(
            {
                ...input,
                [e.target.name] : e.target.value
            }
        )
    }

    const handleClick = () : void => {
        if (!input.name){
            alert("The NAME field is empty!");
            console.error("The NAME field is empty!");
            return;
        }

        if (!input.price){
            alert("The PRICE field is empty!");
            console.error("The PRICE field is empty!");
            return;
        }

        setItems([
            ...items,
            {
                name:input.name,
                price: parseInt(input.price),
                url:input.img,
                note:input.note,
                description:input.description,
                producerCountry:input.producerCountry,
                amountInStore:input.amountInStore
            }
        ])

        alert("You created new Item: " + input.name);
        console.log("New item was created:" + input.name + " " + input.price);
    };

    return (
        <div className="AddToList">
            <input 
            type="text"
            placeholder="Name: pencil"
            className="AddToList-input"
            value={input.name}
            onChange={hanldeChange}
            name="name"
            />
            <input 
            type="text"
            placeholder="Price: 10"
            className="AddToList-input"
            value={input.price}
            onChange={hanldeChange}
            name="price"
            />
            <input 
            type="text"
            placeholder="Image URL: https://...."
            className="AddToList-input"
            value={input.img}
            onChange={hanldeChange}
            name="img"
            />
            <input 
            type="number"
            placeholder="note: 1-10"
            className="AddToList-input"
            value={input.note}
            onChange={hanldeChange}
            name="note"
            />
            <input 
            type="text" 
            placeholder="Producer Country: France"
            className="AddToList-input"
            value={input.producerCountry}
            onChange={hanldeChange}
            name="producerCountry"
            />
            <input 
            type="number"
            placeholder="Amount In Store: 75"
            className="AddToList-input"
            value={input.amountInStore}
            onChange={hanldeChange}
            name="amountInStore"
            />
            <textarea   
            placeholder="Description: Pencil for professional artists!"
            className="AddToList-input"
            value={input.description}
            onChange={hanldeChange}
            name="description"
            />
            <Button
                className="AddToList-btn"
                onClick={handleClick}
                type="primary">
                Add to list.
            </Button>
        </div>
    )
}

export default AddToList;