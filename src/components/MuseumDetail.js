import "./MuseumDetail.css"
import {useEffect} from "react";

const MuseumDetail = (props) => {

    useEffect(() => {
        window.history.pushState(null, null, document.URL);
        window.addEventListener('popstate', function (event) {
            props.onTabChange("museums", "MUSEUMS")
        });
    })
    const renderWork = (work) => {
        return (
            <div className="row gx-5 work ms-5 mb-5" key={work.name}>
                <div className="col-md-3">
                    <div className="workimagecard">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                            alt="Placeholder para las imagenes, el back no tiene imagenes para las obras"/>
                        <p className="museum-name">{work.name}</p>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="workdescriptionbox">
                        <p>{work.description}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="museumDetail d-flex flex-column">
            {props.museum.artworks.map(work => renderWork(work))}
        </div>
    )

}

export default MuseumDetail
