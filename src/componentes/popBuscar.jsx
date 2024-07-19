import { Popconductor } from "./popConductor";
import { useState } from "react";

export const Popbuscar = ({}) =>{

    const [conduct, setConduct] = useState(false);
    const ver = () => {
        setConduct(true);
    };
    const fal = () => {
        setConduct(false);
    }

    return (
        <>
        <div className=" w-[100%] h-[100vh] flex flex-col bg-white
             justify-center items-center overflow-hidden backdrop-blur-sm  z-10 rounded-lg  absolute" >
                {conduct && <Popconductor fal={fal} />}
            <div className="flex flex-col gap-4 ">
            <h1 className="text-2xl font-normal"><b>Elije tu tarifa</b></h1>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$9.000 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$8.000 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$9.100 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$9.700 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$9.900 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$10.900 COP</b></button>
            <button onClick={ver} className="bg-gray-300 p-2 text-black rounded-lg hover:bg-blue-300"><b>$8.900 COP</b></button>
            </div>    
        </div>
        </>
    )
}