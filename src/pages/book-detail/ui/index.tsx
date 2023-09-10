import { useNavigate, useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import { AngelLeftIcon, Button, useAppDispath, useBookDetailPageState, fetchBookById } from "../../../shared"
import { useEffect } from "react"
import { Header, BookDetailInfoWidget } from "../../../widgets"
import { Alert, CircularProgress } from "@mui/material"

export const BookDetailPage = () => {
    const { bookId } = useParams()
    const dispatch = useAppDispath()
    const state = useBookDetailPageState()
    const navigate = useNavigate()

    useEffect(() => {
        if (!!bookId) {
            dispatch(fetchBookById({id: bookId}))
        }
    }, [])

    return (
        <div className={styles.bookDetailPage}>
            <Header classname={styles.bookDetailPage__header}/>
            <Button
                classname={styles.bookDetailPage__btnNavBack}            
                onClick={() => navigate(-1)}>
                <div className={styles.btnNavBack__content}>
                    <AngelLeftIcon className={styles.btnNavBack__icon}/>
                    <span className={styles.btnNavBack__text}>Back</span>
                </div>
            </Button>
            <BookDetailInfoWidget classname={styles.bookDetailPage__bookDetailInfoWidget}/>
            {state.isLoading ? (
                <CircularProgress className={styles.bookDetailPage__loadingProgress}/>
            ) : <></>}
            {!!state.errorMessage ? (
                <Alert
                    className={styles.bookDetailPage__errorAlert}
                    severity="error">
                        {state.errorMessage}
                </Alert>
            ) : <></>}
        </div>
    )
}