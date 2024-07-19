import React from "react";
import {GoogleMap, useJsApiLoader  } from "@react-google-maps/api";

const Map = (props)=>{
    return (
        <GoogleMap
            defaultZoom ={10}
            defaultCenter={{lat:4.5709, lng:74.2973}}
        />
    );
};
export default Map;