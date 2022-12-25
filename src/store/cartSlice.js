import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        showCart: false,
        totalCardQuality: 0
    },
    reducers: {
        addToCart(state) {

        },
        removeFromCart(state) {

        },
        setCartList(state) {
            state.showCart=true
        }
    }
})

export const cartActions = cart.actions

export default cart