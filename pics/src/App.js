import React, {useState} from 'react'
import searchImages from "./api"
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
export default  function App(){

const [images,setImages] = useState([])

    const handleSubmit =async (term) =>{
     const wynik =  await searchImages(term)
        setImages(wynik)
}

  return(
      <div>
        <SearchBar onSubmit={handleSubmit}/>
          <ImageList images={images}/>
      </div>
  )
}