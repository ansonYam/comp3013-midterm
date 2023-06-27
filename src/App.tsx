import { useState } from 'react'
import './App.css'
import books from './data'
import { BookList } from './components/BookList'
import { BookDetails } from './components/BookDetails'

function App() {
  const [bookId, setbookId] = useState(0)
  let currentBook = books[bookId];

  const handleBookClick = (selectedBookId: number) => {
    setbookId(selectedBookId);
  }
  return (
    <div className="container">
      <BookDetails
        name={currentBook.name}
        author={currentBook.author}
        coauthor={currentBook.coAuthor}
        coverImg={currentBook.coverImg}
        sequels={currentBook.sequels}
        rating={currentBook.rating}
      />

      <BookList
        books={books}
        selectedId={bookId}
        onBookClick={handleBookClick}

      />
    </div>
  )
}

export default App
