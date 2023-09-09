import { useEffect, useState } from "react"
import { FetchTypes, SearchLine, Select, Sorts, Subjects, fetchBooksByKeywords, useAppDispath, useSearchPageState } from "../../../shared"
import cn from "classnames"
import styles from "./styles.module.scss"
import strings from "../lib/strings"


type Props = {
    classname?: string
}

export const SearchWidget: React.FC<Props> = (props) => {
    const dispatch = useAppDispath()
    const searchPageState = useSearchPageState()

    const [keywords, setKeywords] = useState(searchPageState.keywords)
    const [selectedSubject, setSelectedSubject] = useState<Subjects>(Subjects.all)
    const [selectedOrder, setSelectedOrder] = useState<Sorts>(Sorts.relevance)

    const onSearch = (orderBy: Sorts, keywords?: string) => {
        if (!!keywords) {
            dispatch(
                fetchBooksByKeywords({
                    type: FetchTypes.search,
                    keywords: keywords,
                    sort: orderBy,
                    subject: selectedSubject,
                    offset: 0
                })
            )
        }
    }

    useEffect(() => {
        onSearch(selectedOrder, keywords)
    }, [selectedOrder, selectedSubject])

    return (
        <div className={cn(props.classname, styles.searchWidget)}>
            <div className={styles.searchWidget__inner}>
                <h1 className={styles.searchWidget__title}>{strings.title}</h1>
                <SearchLine
                    classname={styles.searchWidget__searchLine}
                    placeholder={strings.searchLinePlaceHolder}
                    value={keywords}
                    setValue={setKeywords}
                    onSearch={() => onSearch(selectedOrder, keywords)}/>
                <div className={styles.searchWidget__paramsContainer}>
                    <div className={styles.paramsContainer__orderByContainer}>
                        <span className={styles.orderByContainer__title}>order by:</span>
                        <Select
                            classname={styles.orderByContainer__select}
                            items={Object.keys(Sorts).map(it => ({value: it, name: it}))}
                            selected={selectedOrder}
                            setSelected={setSelectedOrder}/>
                    </div>
                    <div className={styles.paramsContainer__categoriesContainer}>
                        <span className={styles.categoriesContainer__title}>category:</span>
                        <Select
                            classname={styles.categoriesContainer__select}
                            items={Object.keys(Subjects).map(it => ({value: it, name: it}))}
                            selected={selectedSubject}
                            setSelected={setSelectedSubject}/>
                    </div>
                </div>
                <span 
                    className={!!searchPageState.totalItems ? styles.searchWidget__foundNumber_active : styles.searchWidget__foundNumber}>Found: {searchPageState.totalItems}</span>
            </div>
        </div>
    )
}