import { createAsyncThunk } from "@reduxjs/toolkit";
import googleBooksApiConfig from "../../lib/google-books-api-config.json"
import { FetchTypes, Sorts } from "./enumes";

export type Params = {
    type: FetchTypes
    keywords?: string
    sort: Sorts
    subject?: string
    offset: number
}

export const fetchBooksByKeywords = createAsyncThunk("fetchBooksByKeywords", async (params: Params) => {
    const subject = params.subject !== "all"  ? `subject:${params.subject}` : ""

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${params?.keywords?.replace(" ", "+")}+${subject}&key=${googleBooksApiConfig.apiKey}&orderBy=${params.sort}&maxResults=30&startIndex=${params.offset}`)
    

    return response.json()
        .then((res) => {
            return {
                params: {
                    type: params.type,
                    keywords: params.keywords,
                    sort: params.sort,
                    subject: params.subject,
                    offset: params.offset
                },
                response: res
            }
    })
})