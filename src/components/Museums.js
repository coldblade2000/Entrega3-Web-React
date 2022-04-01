import {useEffect, useLayoutEffect, useState} from "react";
import Museum from "./Museum";

const Museums = ()=>{
    const url = "https://back-museums-uniandes.herokuapp.com/api/museums"

    const [museums, setMuseums] = useState([])

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(newMuseums =>{
            setMuseums(newMuseums)
        })
    })

    return (
        <div className="row justify-content-center">
            {museums.map(museum => (
                <div className="col-md-3">
                    <Museum data={museum}/>
                </div>
            ))}
        </div>
    );
}

export default Museums
