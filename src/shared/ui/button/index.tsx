import React from "react"
import styles from "./styles.module.scss"
import cn from "classnames"

type Props = {
    classname?: string
    children: React.ReactNode
    onClick: () => void
}

export const Button: React.FC<Props> = (props) => {
    return (
        <button
            className={cn(props.classname, styles.button)}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}