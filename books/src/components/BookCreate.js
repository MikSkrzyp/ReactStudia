import React, {useState} from 'react'

function BookCreate({onCreate}){

    const [title,setTitle] = useState("")

    const handleChange = event =>{
        setTitle(event.target.value)
    }

    const handleSubmit = event =>{
        event.preventDefault()
        onCreate(title)
        setTitle("")
    }

    return(
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <label>Tytul Ksiazki</label>
                <input className='input' value={title} onChange={handleChange}/>
                <button className='button'>Dodaj!</button>
            </form>
        </div>
    )
}
export default BookCreate