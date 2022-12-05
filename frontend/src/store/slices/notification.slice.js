import { createSlice } from "@reduxjs/toolkit";

const notification = createSlice({
    name: 'notifications',
    initialState: {
        notificationsList: []
    },
    reducers: {
        setNotifications: (state, action) => {
            state.notificationsList = action.payload.notificationsList
        }
    }
})  

export const { setNotifications } = notification.actions

export default notification.reducer