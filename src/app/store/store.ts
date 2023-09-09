import { configureStore } from "@reduxjs/toolkit"
import { searchPageSlice } from "../../pages/search/model/slice"
import { bookDetailPageSlice } from "../../pages/book-detail/model/slice"

export const makeStore = () => {
    const store = configureStore({
        reducer: {
            searchPage: searchPageSlice.reducer,
            bookDetailPage: bookDetailPageSlice.reducer
        }
    })

    return store
}

export const appStore = makeStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch