import React, {useState, useEffect} from 'react'
import BookCard from './BookCard'

export default function Cards({arrayOfBooks}) {
    if (!Array.isArray(arrayOfBooks)) {
        return <p></p>;
      }
//insted of above condition we can use useEffect with a function
    return (
    <>
        <div className='mainContainer'>
            <div className='cards'>
            {arrayOfBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
            </div>
        </div> 
    </>
  )
}
