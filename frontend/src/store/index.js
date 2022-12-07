import { configureStore } from "@reduxjs/toolkit";
import user from './slices/user.slice'
import notification from "./slices/notification.slice";
import searchResults from "./slices/searchResults.slice"

export default configureStore({
    reducer: {
        user,
        notification,
        searchResults
    }
})