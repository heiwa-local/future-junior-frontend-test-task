import React from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { Image } from "../../../../shared"

type Props = {
    classname?: string
    id?: string
    imageUrl?: string
    title?: string
    authors?: string[]
    tag?: string
    onClick: () => void
}

export const BookCard: React.FC<Props> = (props) => {

    const handleClick = () => {
        props.onClick()
    }

    return (
        <div
            className={cn(props.classname, styles.bookCard)}
            onClick={() => handleClick()}>
            <div className={styles.bookCard__imageWrap}>
                <Image
                    className={styles.bookCard__image}
                    src={props.imageUrl}/>
            </div>
            <h3 className={styles.bookCard__title}>{props.title}</h3>
            <h4 className={styles.bookCard__authors}>{props.authors?.join(", ")}</h4>
            <span className={styles.bookCard__tag}>{props.tag}</span>
        </div>
    )
}