import { createSlice } from "@reduxjs/toolkit"
import { BookDto } from "../../../entities/book/api/types"
import { BookModel } from "../../../entities/book/model/types"
import { bookDtoMapper } from "../../../entities/book/lib/mappers"
import { BookGoogleApiDto } from "../../../shared/api/google-books/types"
import { fetchBookById } from "../../../shared/api/google-books/fetch-book-by-id"

type BookDetailPageState = {
    isLoading: boolean
    book?: BookModel
}

const initialState: BookDetailPageState = {
    isLoading: false,
    book: undefined
}

export const bookDetailPageSlice = createSlice({
    name: "bookDetailPageSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(fetchBookById.pending, (state, action) => {
            state.isLoading = true
            state.book = undefined
            console.log("Loading")
        })

        builder.addCase(fetchBookById.fulfilled, (state, action) => {
            let payload = action.payload
            console.log(payload)

            if (typeof payload.response === "string") {
                console.log("error")
            } else {
                let data = payload as BookGoogleApiDto<BookDto>

                state.book = bookDtoMapper(data.response)

                state.isLoading = false
            }
        })
    }
})