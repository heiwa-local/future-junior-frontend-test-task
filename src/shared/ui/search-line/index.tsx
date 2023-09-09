import { AngelRightIcon } from "../icons"
import styles from "./styles.module.scss"
import cn from "classnames"

type Props = {
    classname?: string
    inputClassname?: string
    placeholder?: string
    value: any
    setValue: (value: any) => void
    onSearch: (value: any) => void
}

export const SearchLine: React.FC<Props> = (props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.target.value)
    }

    const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.onSearch(props.value)
        }
    }


    return (
        <div className={cn(props.classname, styles.searchLine)}>
            <input
                className={cn(props.inputClassname, styles.searchLine__input)}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}
                onKeyDown={handleEnterDown}/>
            <button
                className={styles.searchLine__button}
                onClick={() => props.onSearch(props.value)}>
                    <AngelRightIcon classname={styles.button__icon}/>
            </button>
        </div>
    )
}