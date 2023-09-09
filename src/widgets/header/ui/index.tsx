import React from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { useAppDispath, useSearchPageState } from "../../../shared/model/redux-hooks"
import { useNavigate } from "react-router-dom"
import { navigateHomeRequest } from "../../../shared/model/navigate-home-request"

type Props = {
    classname?: string
}

export const Header: React.FC<Props> = (props) => {
    const dispatch = useAppDispath()
    const navigate = useNavigate()

    const handleLogoClick = () => {
        dispatch(navigateHomeRequest())
        navigate("/search")
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className={cn(props.classname, styles.header)}>
            <div className={styles.header__inner}>
                <img
                    className={styles.header__logo}
                    src="/books_finder_logo.svg"
                    onClick={handleLogoClick}/>
            </div>
        </div>
    )
}