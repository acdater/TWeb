import { IpcNetConnectOpts } from "net"
import React from "react"
import {IAddState as IProps} from "../App"



const List: React.FC<IProps> = ({items}) => {

    const renderList = () : JSX.Element[] =>
    {
        return items.map((items) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={items.url}></img>
                        <h2>{items.name}</h2>
                    </div>
                    <p>{items.price} MDL.</p>
                    <p>{items.note}/10</p>
                    <p>{items.producerCountry}</p>
                    <p className="List-note">
                        {items.description}
                    </p>
                    <p>{items.amountInStore} in store</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;