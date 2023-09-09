import cn from "classnames"

type Props = {
    className?: string
}

export const AngelLeftIcon: React.FC<Props> = (props) => {
    return (
        <svg
            className={props.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            fill="none">
                <path 
                d="M41.3999 278.6C28.8999 266.1 28.8999 245.8 41.3999 233.3L201.4 73.3C213.9 60.8 234.2 60.8 246.7 73.3C259.2 85.8 259.2 106.1 246.7 118.6L109.3 256L246.6 393.4C259.1 405.9 259.1 426.2 246.6 438.7C234.1 451.2 213.8 451.2 201.3 438.7L41.2999 278.7L41.3999 278.6Z"
                fill="currentColor"/>
        </svg>
    )
}