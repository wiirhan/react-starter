import { createStore } from 'jotai'

export const store = createStore()

export const getAtom = store.get
export const setAtom = store.set
