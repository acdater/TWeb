import RootStore from './RootStore.store'

const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            name: 'Name1',
            description: 'Some more text',
            inStock: true,
            price: 10,
        },
    ]
})

export default storeProvider