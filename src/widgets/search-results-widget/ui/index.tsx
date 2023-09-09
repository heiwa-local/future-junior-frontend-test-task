import { useNavigate } from "react-router-dom"
import { Button, FetchTypes, fetchBooksByKeywords, useAppDispath, useSearchPageState } from "../../../shared"
import styles from "./styles.module.scss"
import cn from "classnames"
import { BookCard } from "../../../entities"

type Props = {
    classname?: string
}

export const SearchResultsWidget: React.FC<Props> = (props) => {
    const searchPageState = useSearchPageState()
    const dispatch = useAppDispath()
    const navigate = useNavigate()

    const handleLoadMore = () => {
        dispatch(
            fetchBooksByKeywords({
                type: FetchTypes.loadMore,
                keywords: searchPageState.keywords,
                sort: searchPageState.sort,
                subject: searchPageState.subject,
                offset: searchPageState.offset + 30,
            })
        )
    }

    const handleBookCardClick = (id?: string) => {
        navigate(`/books/${id}`)
    }

    return (
        <div className={cn(props.classname, styles.searchResultsWidget)}>
            <div className={styles.searchResultsWidget__booksGrid}>
                {searchPageState.books?.map(it => (
                    <BookCard
                        id={it.id}
                        imageUrl={it.imageUrl}
                        title={it.title}
                        authors={it.authors}
                        tag={it.subjects?.at(0)}
                        onClick={() => handleBookCardClick(it.id)}/>
                ))}
            </div>
            <Button
                classname={styles.searchResultsWidget__loadMoreButton}
                onClick={handleLoadMore}>
                <span>Load More</span>
            </Button>

        </div>
    )
}