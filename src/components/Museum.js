import "./Museum.css"
const Museum = ({data}) => {

    return (
        <div className="museum-card d-flex flex-column ">
            <img src={data.image} alt="Imagen de un muséo"/>
            <p className="museum-name">{data.name}</p>
            <p className="museum-city">{data.city}</p>
        </div>
    );
}
export default Museum
