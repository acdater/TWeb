import { getParent, getParentOfType, types } from 'mobx-state-tree'
import RootStore from '../stores/RootStore.store'

export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    name: '',
    description: '',
    price:0,
    inStock: false
})
    .views((self) => ({
        get isAvailable() {
            return self.inStock
        },

        findInName(param: any) {
            self.name.includes(param)
        }
    }))
    .actions((self) => ({
        changeDescription(value: string) {
            self.description = value
        },

        changeInStock(state: boolean) {
            console.log('>>state', state)
            self.inStock = state
        },

        addItem() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.addItem(self.id)
        },

        removeItem() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.removeItem(self.id)
        }

    }))


