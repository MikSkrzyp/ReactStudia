import React, { useState } from "react"; // Import React and useState
import AnimalShow from "./AnimalShow"; // Import AnimalShow component

function getRandomAnimal(){
    const animals = ["bird","cat","cow","dog","gator","horse"]
    return animals[Math.floor(Math.random()*animals.length)]
}

function App() {

    const [animals,setAnimals] = useState([])

    const handleClick = () =>{
        console.log("button clicked")
        setAnimals([...animals,getRandomAnimal()])
    }


    const renderedAnimals = animals.map((animal,index)=>{
        return <AnimalShow type={animal} key={index}/>
    })


    return (
        <div>
            <button onClick={handleClick} >add animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}

export default App;