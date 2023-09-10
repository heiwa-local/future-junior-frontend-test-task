import { createSlice } from "@reduxjs/toolkit"
import { BookDto, BookModel, bookDtoMapper } from "../../../entities"
import { BooksGoogleApiDto, FetchTypes, Sorts, fetchBooksByKeywords, navigateHomeRequest } from "../../../shared"


type SearchPageState = {
    isLoading: boolean
    errorMessage?: string
    isFirstOpen: boolean
    books: BookModel[],
    totalItems?: number
    keywords?: string
    sort: Sorts,
    subject?: string,
    offset: number
}

const initialState: SearchPageState = {
    isLoading: false,
    errorMessage: undefined,
    isFirstOpen: true,
    books: [],
    totalItems: undefined,
    keywords: undefined,
    sort: Sorts.relevance,
    subject: undefined,
    offset: 0
}

export const searchPageSlice = createSlice({
    name: "searchPageSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

        builder.addCase(fetchBooksByKeywords.pending, (state, action) => {
            state.isLoading = true
            state.errorMessage = undefined
        })

        builder.addCase(fetchBooksByKeywords.fulfilled, (state, action) => {
            let payload = action.payload

            if (!!payload.response["error"]) {
                state.errorMessage = payload.response["error"]["message"]
                state.isLoading = false
            } else {
                let data = payload as BooksGoogleApiDto<BookDto[]>

                switch(data.params.type) {
                    case FetchTypes.search: {
                        const books = data.response.items?.map(it => bookDtoMapper(it))
                        state.books = !!books ? books : []
                        state.totalItems = data.response.totalItems
                        state.keywords = data.params.keywords
                        state.sort = data.params.sort
                        state.subject = data.params.subject
                        state.offset = data.params.offset
                        break
                    }
                    case FetchTypes.loadMore: {
                        const books = data.response.items?.map(it => bookDtoMapper(it))
                        state.books = !!books ? [...state.books,...books] : state.books

                        state.keywords = data.params.keywords
                        state.sort = data.params.sort
                        state.subject = data.params.subject
                        state.offset = data.params.offset
                        break
                    }
                }

                state.isLoading = false
                state.isFirstOpen = false
            }
        })

        builder.addCase(navigateHomeRequest.pending, (state, action) => {
            state.isFirstOpen = true
            state.totalItems = undefined
        })
    }
})