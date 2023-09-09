import { BookDto } from "../api/types";
import { BookModel } from "../model/types";

export const bookDtoMapper = (dto?: BookDto): BookModel => {
    return {
        id: dto?.id,
        title: dto?.volumeInfo?.title,
        authors: dto?.volumeInfo?.authors,
        imageUrl: dto?.volumeInfo?.imageLinks?.thumbnail,
        description: dto?.volumeInfo?.description,
        subjects: dto?.volumeInfo?.categories
    }
}