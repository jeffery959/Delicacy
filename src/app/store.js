import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import menuReducer from '../features/counter/menuSlice'
import signInReducer from '../features/counter/signInSlice'
export const store = configureStore({
    reducer: {

        counter: counterReducer,       
        menu: menuReducer,
        signIn:signInReducer

    },
})