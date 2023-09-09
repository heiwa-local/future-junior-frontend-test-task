import { FetchTypes, Sorts } from "./enumes"

export type BooksGoogleApiDto <T> = {
    params: {
        id?: string
        type?: FetchTypes
        keywords?: string
        sort: Sorts
        subject?: string
        offset: number
    },
    response: {
        totalItems?: number
        items?: T
    }
}

export type BookGoogleApiDto <T> = {
    params: {
        id?: string
    },
    response: T
}