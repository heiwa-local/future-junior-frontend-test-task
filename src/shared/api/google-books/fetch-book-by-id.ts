import { createAsyncThunk } from "@reduxjs/toolkit";
import googleBooksApiConfig from "../../lib/google-books-api-config.json"

export type Params = {
    id: string
}

export const fetchBookById = createAsyncThunk("fetchBookById", async (params: Params) => {

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}?key=${googleBooksApiConfig.apiKey}`)
    

    return response.json()
        .then((res) => {
            return {
                params: {
                    id: params.id,
                },
                response: res
            }
    })
})