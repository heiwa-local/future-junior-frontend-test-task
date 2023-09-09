import {Route, Routes} from "react-router-dom";
import { SearchPage } from "./search";
import { BookDetailPage } from "./book-detail";


export const Routing = () => {
    return (
        <Routes>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/books/:bookId" element={<BookDetailPage/>}/>
        </Routes>
    )
}