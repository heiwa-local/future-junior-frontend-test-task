import { Alert, CircularProgress } from "@mui/material"
import { useSearchPageState } from "../../../shared"
import { Header, SearchResultsWidget, SearchWidget } from "../../../widgets"
import styles from "./styles.module.scss"

export const SearchPage = () => {
    const state = useSearchPageState()

    return (
        <div className={styles.searchPage}>
            <Header classname={styles.searchPage__header}/>
            <SearchWidget classname={state.isFirstOpen ? styles.searchPage__searchWidget : styles.searchPage__searchWidget_active}/>
            <SearchResultsWidget classname={state.isFirstOpen ? styles.searchPage__searchResultsWidget : styles.searchPage__searchResultsWidget_active}/>
            {state.isLoading ? (
                <CircularProgress className={styles.searchPage__loadingProgress}/>
            ) : <></>}
            {!!state.errorMessage ? (
                <Alert
                    className={styles.searchPage__errorAlert}
                    severity="error">
                        {state.errorMessage}
                </Alert>
            ) : <></>}
        </div>
    )
}