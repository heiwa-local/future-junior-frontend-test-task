import React from "react"
import styles from "./styles.module.scss"
import cn from "classnames"

type Props = {
    classname?: string
    items?: {value: any, name: any}[]
    selected: any
    setSelected: (value: any) => void
}

export const Select: React.FC<Props> = (props) => {
    return (
        <select
            className={cn(props.classname, styles.select)}
            onChange={e => props.setSelected(e.target.value)}
            value={props.selected}>
            {props.items?.map(({value, name}) => (
                <option value={value}>
                    {name}
                </option>
            ))}
        </select>
    )
}