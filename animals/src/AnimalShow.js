import bird from "./img/bird.svg"
import cat from "./img/cat.svg"
import cow from "./img/cow.svg"
import dog from "./img/dog.svg"
import gator from "./img/gator.svg"
import horse from "./img/horse.svg"
import heart from "./img/heart.svg"
import {useState} from "react";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({type}) {

    const [clicks,setClicks] = useState(0)

    const handleClick = () =>{
        setClicks(clicks+1)
    }

    return (
        <div onClick={handleClick}>
        <img src={svgMap[type]} alt={"zwierzak"} width="200" />
        <img src={heart} alt="Serduszko" style={{width: 10 + 10*clicks}} />
        </div>
    )
}

export default AnimalShow