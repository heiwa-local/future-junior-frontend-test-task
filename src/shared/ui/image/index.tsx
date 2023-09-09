import { useEffect, useRef, useState } from "react"
import styles from "./styles.module.scss"
import cn from "classnames"
import { CircularProgress } from "@mui/material"

type Props = {
    className?: string
    src?: string,
    key?: any
    onClick?: () => void
}

export const Image: React.FC<Props> = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    const ref = useRef(props.src)

    useEffect(() => {
        ref.current = props.src
    }, [props.src])

    useEffect(() => {
        setTimeout(() => {
            console.log(ref.current)
            if (!!ref.current) {
                setError(false)
            } else {
                setError(true)
            }
        }, 5000)
    }, [])

    const handleError = async () => {
        setError(true)
        setLoaded(true)
    }

    const handleLoad = () => {
        setLoaded(true)
        setError(false)
    }

    return (
        <div>
            <img
                className={props.className}
                src={props.src}
                key={props.key}
                onLoad={() => handleLoad()}
                onError={() => handleError()}
                style={loaded && !error ? {display: "block"} : {display: "none"}}
                onClick={props.onClick}/>
            <div
                className={props.className}
                style={!loaded && !error ? {display: "block"} : {display: "none"}}>
                <CircularProgress
                    className={styles.loadingProgress}
                    style={{margin: "auto"}}/>
            </div>
            <img
                className={props.className}
                src={"/not_found_image.png"}
                key={props.key}
                style={error ? {display: "block"} : {display: "none"}}
                onClick={props.onClick}/>
        </div>
    )
}