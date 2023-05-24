import styles from './details.module.css'
import { printStars } from "../../helpers/printStars"

interface Props {
    name: string;
    author: string;
    coauthor?: string;
    coverImg: string;
    sequels?: string[]; // optional prop
    rating: number;
}

export function BookDetails({ name, author, coauthor, coverImg, sequels, rating }: Props) {
    return (
        <div className={styles.detailsContainer}>
            <img alt={name} src={coverImg} className={styles.bigImage} />
            <div>
                <p>Author: {author}</p>
                {coauthor ? <p>Co-author: {coauthor}</p> : ""}
                {sequels ?
                    <p>Sequels:
                        <ol>{sequels?.map((sequel) => (
                            <li>{sequel}</li>
                        ))}
                        </ol>
                    </p> :
                    ""}
                <p>Rating: {printStars(rating)}</p>
            </div>
        </div>
    )
}