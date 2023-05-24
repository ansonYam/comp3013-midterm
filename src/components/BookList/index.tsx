import { Book } from "../Book";
import { BookType } from "../../types/bookType";
import styles from './booklist.module.css'

interface Props {
    books: BookType[];
    selectedId: number;
    onBookClick: (bookId: number) => void;
}

export function BookList({ books, selectedId, onBookClick }: Props) {
    return (
        <>
            {books.map((book) => (
                <Book key={book.id}
                    name={book.name}
                    coverImg={book.coverImg}
                    onClick={() => onBookClick(book.id)}
                    active = {book.id === selectedId}
                />
            ))
            }
        </>
    )
}