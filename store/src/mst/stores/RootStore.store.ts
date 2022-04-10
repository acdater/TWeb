import { applySnapshot, types } from 'mobx-state-tree'
import { IContentModel } from '../../Interfaces/interfaces'
import { ContentModel } from '../models/Content.model'


const RootStore = types.model('RootStore', {
    contents: types.array(ContentModel),

    contents_items: types.array(types.safeReference(ContentModel))

})
    .actions((self) => ({
        setDataToLocalStorage(value: any = {}) {
            localStorage.setItem('initialState', JSON.stringify(value))
        },

        getDataFromLocalStorage(key: string = 'initialState') {
            return localStorage.getItem(key)
        },

        removeLocalStorage(key: string = 'initialState') {
            localStorage.removeItem(key)
            console.log(`>>${ key } was removed`)
        }
    }))

    .actions((self) => ({
        setInitialStorageContents() {
            self.setDataToLocalStorage(self.contents)
        },

        addItem(id: string) {
            self.contents_items.push(id)
        },

        removeItem(id: string) {
            const updatesItem = self.contents_items.filter((content) => {
                if (content?.id !== id) {
                    return true
                } else {
                    return false
                }
            })

            console.log('>>updatesNotes', updatesItem)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            applySnapshot(self.contents_items, updatesItem)

        }

    }))

export default RootStore