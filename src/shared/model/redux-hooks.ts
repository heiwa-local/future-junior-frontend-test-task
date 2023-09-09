import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";

export const useAppDispath = useDispatch<AppDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useSearchPageState = () => {
    return useAppSelector((state) => state.searchPage)
}

export const useBookDetailPageState = () => {
    return useAppSelector((state) => state.bookDetailPage)
}