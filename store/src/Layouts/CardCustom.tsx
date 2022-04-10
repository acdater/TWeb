import { Button, Checkbox, Input } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../Interfaces/interfaces'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { name, description, price, changeDescription, inStock, changeInStock, id, addItem, removeItem } = content


    useEffect(() => {
        if (inStock) {
            // alert(`Is seen ${ title }`)
            console.log('>>title', name)
        }
    }, [ inStock ])

    return (
        <Card title={ name } bordered={ false }>
            { description }

            <Input
                value={ name }
                placeholder={ name }
                onChange={ (e) => changeDescription(e.target.value) }
            />

            <Input
                value={ description }
                placeholder={ description }
                onChange={ (e) => changeDescription(e.target.value) }
            />

            <Checkbox defaultChecked={ inStock } checked={ inStock } onChange={ (e) => changeInStock(e.target.checked) } />

            <Button onClick={ addItem }>Add item</Button>
            <Button type={ 'primary' } onClick={ removeItem }>Remove item</Button>

        </Card>
    )

})