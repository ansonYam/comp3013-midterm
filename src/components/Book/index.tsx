import styles from './book.module.css'

interface Props {
    name: string,
    coverImg: string,
    onClick: () => void;
    active: boolean;
}

export function Book({ name, coverImg, onClick, active }: Props) {
    const getClassName = (active: boolean) => {
        return (
            active
            ? `${styles.bookContainer} ${styles.active}`
            : styles.bookContainer
        )
    }
    return (
        <div className={getClassName(active)}
            onClick={onClick}>
            <p>{name}</p>
            <img alt={name} src={coverImg} />
        </div>
    )
}