import { List } from 'antd'
import { IContentModel } from '../../Interfaces/interfaces'

export const Note = ({ content }: { content: IContentModel }) => {
    return (
        <List.Item.Meta
            title={ content.name }
            description={ content.description }
        />
    )
}
