export type BookDto = {
    id?: string
    volumeInfo?: {
        title?: string
        authors?: string[]
        description?: string
        imageLinks?: {
            thumbnail?: string
        }
        categories: string[]
    }
}