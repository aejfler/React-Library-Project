
export default function Modal({bookID, onClick}) {

  return (
    <div className='modalFrame'>
        <div className='modalContainer'>
            <h1>{bookID.title}</h1>
            <h2>{bookID.author}</h2>
            <h2>{bookID.epouch}</h2>
            <h2>{bookID.genre}</h2>
            <h2>{bookID.has_audio}</h2>
            <p>{bookID.url}</p>
            <button onClick={onClick}><b>X</b></button>
        </div>
      
    </div>
  )
}
