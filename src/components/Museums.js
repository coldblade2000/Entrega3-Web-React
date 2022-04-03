import {useEffect, useLayoutEffect, useState} from "react";
import Museum from "./Museum";

const Museums = ({onTabChange}) => {
    const url = "https://back-museums-uniandes.herokuapp.com/api/museums"

    const [museums, setMuseums] = useState([])

    useEffect(() => {
            if (museums.length < 1) {
                fetch(url).then(res => res.json()).then(newMuseums => {
                    setMuseums(newMuseums)
                })
            }
        }
    )

    return (
        <div className="row justify-content-center px-5">
            {museums.map(museum => (
                <div key={museum.name} className="col-md-3">
                    <Museum data={museum} onTabChange={onTabChange}/>
                </div>
            ))}
        </div>
    );
}

export default Museums
