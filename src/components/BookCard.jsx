import React, {useState} from 'react'
import Modal from './Modal'

export default function BookCard({book}) {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModalState = () => {
    setModalOpen(!isModalOpen)
    console.log(isModalOpen);
  }
  return (
    <>
    <div className='bookDetails' onClick={handleModalState}>
      <h1>{book.title}</h1>
      <img src={book.simple_thumb} alt={book.title} />
      <h3>{}</h3>
    </div>
    {isModalOpen && <Modal key={book.id} bookID={book} onClick={handleModalState}/>}
    </>

  )
}
