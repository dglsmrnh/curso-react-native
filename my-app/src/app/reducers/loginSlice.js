import {createSlice} from '@reduxjs/toolkit'
import * as RootNavigation from '../../constants/RootNavigation';

const initialState = {
    isLogged: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLogged = true;
            console.log('tá logado? =>' + state.isLogged)
            RootNavigation.navigate("Home")
        },
        logout: (state) => {
            state.isLogged = false;
            console.log('tá logado? =>' + state.isLogged)
            RootNavigation.navigate("Login")
        }
    },
})

// Action creators are generated for each case reducer function
export const {login, logout} = loginSlice.actions

export default loginSlice.reducer