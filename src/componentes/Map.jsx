import React from "react";

import {
    GoogleMap,
    wihtScriptjs,
    withGoogleMap
} from "react-google-maps";

const Map = (props)=>{
    return (
        <GoogleMap
        defaultZoom ={10}
        defaultCenter={{lat:4.5709, lng:74.2973}}
        />
    );
}
export default wihtScriptjs(
    withGoogleMap(
        Map
    )
)