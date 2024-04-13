import React, {useState} from 'react'

function SearchBar({onSubmit}){

    const [term,setTerm] = useState("")

    const handleSubmit = ()=>{
        onSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value)
    }

    return(
        <div>
            <input  onChange={handleChange}/>
            <button onClick={handleSubmit}>Wyszukaj</button>
        </div>
    )
}
export default SearchBar