import Map from "../componentes/Map.jsx";
import credenciales from "./credenciales.jsx";

export const Geolo = () =>{
    const mapURL= `https://maps.googleapis.com/maps/api/js?v:3.exp&key=${credenciales.mapsKey}`;
    
    return (
        <div>
            <Map
             googleMapURL={mapURL}
             />
        </div>
    )
}