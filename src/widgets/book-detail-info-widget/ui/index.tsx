import React from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useBookDetailPageState, Image } from "../../../shared"

type Props = {
    classname?: string
}

export const BookDetailInfoWidget: React.FC<Props> = (props) => {
    const bookDetailPageState = useBookDetailPageState()

    return (
        <div className={cn(props.classname, styles.bookDetailInfoWidget)}>
            <div className={styles.bookDetailInfoWidget__baseImageWrap}>
                <Image
                    className={styles.bookDetailInfoWidget__baseImage}
                    src={bookDetailPageState.book?.imageUrl}/>
            </div>
            <div className={styles.bookDetailInfoWidget__infoContainer}>
                <span className={styles.infoContainer__subjects}>{bookDetailPageState.book?.subjects?.join(" / ")}</span>
                <h2 className={styles.infoContainer__title}>{bookDetailPageState.book?.title}</h2>
                <h3 className={styles.infoContainer__authors}>{bookDetailPageState.book?.authors}</h3>
                <p className={styles.infoContainer__description}>{bookDetailPageState.book?.description}</p>
            </div>
        </div>
    )
}