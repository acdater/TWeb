import { Breadcrumb, Layout, List, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Note } from '../components/Notes/Note'
import { useRootStore } from '../index'
import { IContentModel } from '../Interfaces/interfaces'
import { CardCustom } from './CardCustom'

const { Footer } = Layout

export const ContentLayout = observer(() => {

    const { contents, contents_items } = useRootStore()

    useEffect(() => {
        console.log('>>contents_items', contents_items)
    }, [ contents_items ])

    return (
        <>
            <Content style={ { padding: '0 50px' } }>
                <Breadcrumb style={ { margin: '16px 0' } }>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className='site-layout-content'>
                    <Row gutter={ 16 }>
                        { contents.map((content: IContentModel) => {

                            return (
                                <CardCustom key={ content.id } content={ content } />
                            )
                        }) }
                    </Row>

                </div>

                <div>
                    { contents_items.map((content: IContentModel) => {
                        return (
                            <List.Item>
                                <Note key={ content.id } content={ content } />
                            </List.Item>
                        )
                    })
                    }

                </div>
            </Content>
            <Footer style={ { textAlign: 'center' } }>ACeglei RM-192</Footer>
        </>

    )
})