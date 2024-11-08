import {create} from 'zustand'
import {persist} from 'zustand/middleware'


let store = (set) => ({
        localCount: 0,
        setlocalCount: () =>
            set((state) => ({ localCount: state.localCount + 1 }))
});
    



store = persist(store, {name: "Local-pop-count"})
let useStore = create(store)

export default useStore;