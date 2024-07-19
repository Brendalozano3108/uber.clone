import Map from "../componentes/Map.jsx";
import credenciales from "./credenciales.jsx";
import { Popacep } from '../componentes/popAcep';
import { useState } from 'react';
import { Popbuscar } from "../componentes/popBuscar.jsx";
import valledupar from "../assets/img/valledupar.png";

export const Precios = () => {
    const [acep, setAcep] = useState(false);
    const open = () => {
        setAcep(true);
    };
    const close = () => {
        setAcep(false);
    };
    const [busca, setBusca] = useState(false);
    const one = () => {
        setBusca(true);
    };
    const two = () => {
        setBusca(false);
    };



    const mapURL = `https://maps.googleapis.com/maps/api/js?v:3.exp&key=${credenciales.mapsKey}`;

    return (
        <div className="ml-[5%] gap-3 relative">
            {acep && <Popacep close={close} />}
            {busca && <Popbuscar two={two} />}
            <div className="flex flex-grow gap-3 p-4 font-normal">
                <h1 className="text-2xl"><b>Uber</b></h1>
                <button className="ml-9 text-gray-700"><b>⛟  Viaje</b></button>
                <button><b>◷ Hourly</b></button>
                <button className="ml-[60%]"><b>☑  Mis Viajes</b></button>
            </div>
            <div className="flex flex-grow gap-[10%] w-[100vh]">
                <div className="flex flex-col gap-3 mt-5  rounded-lg border-solid border-2 border-gray-300 bg-white text-center px-4 py-4 ">
                    <h1 className="text-lg"><b>Consigue un Viaje</b></h1>
                    <input className="p-3 text-black font-serif rounded-lg" type="text" placeholder="◊ Ubicación de recogida" />
                    <input className="p-3 text-black font-serif rounded-lg" type="text" placeholder="◉ Ubicación de origen" />

                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-gray-300 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-300 dark:hover:bg-gray-300 dark:focus:ring-gray-300" type="button">Recoger Ya <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Elige la hora de recogida con una antelación de hasta 30 días.</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tiempo de espera adicional incluido para que empiece tu viaje.</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cancela sin ningún coste hasta 60 minutos antes.</a>
                            </li>

                        </ul>
                    </div>
                    <button onClick={open} className="bg-gray-400 rounded-lg py-2 ">Para mí ⭣</button>
                    <button onClick={one} className="w-[40vh] bg-gray-100 p-3 rounded-lg "><b>Buscar</b></button>

                </div>
                <img className="ml-8 w-[100%]" src={valledupar} alt="" />
                
            </div>
        </div>
    )
};