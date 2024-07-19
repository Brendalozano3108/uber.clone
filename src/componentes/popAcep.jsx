import { Popotro} from "./popOtro";
import { Popbuscar } from "./popBuscar";
import { useState } from "react";
export const Popacep = ({ }) => {

    const [otro, setOtro] = useState(false);
    const Ac = () => {
        setOtro(true);
    };
    const Cl = () => {
        setOtro(false);
    };
    const [bus, setBus] = useState (false);
    const Si = () => {
        setBus(true);
    };
    const No = () => {
        setBus(false);
    }
    return (
        <>
            <div className=" w-[100%] h-[100vh] flex flex-col
             justify-center items-center overflow-hidden backdrop-blur-sm  z-10 rounded-lg  absolute" >
                {otro && <Popotro Cl={Cl} />}
                {bus && <Popbuscar No={No} />}
                <div className="bg-white w-[150vh] h-[100vh] gap-3 flex flex-col justify-center items-center ">
                    <h1 className="text-xl"><b>¿Desea Cambiar de Pasajero?</b></h1>
                    <button onClick={Si} className="p-2 px-[30vh] bg-slate-300 rounded-xl"><b>Yo</b></button>
                    <button onClick={Ac} className="p-2 px-[14vh] bg-slate-300 rounded-xl"><b>Solicita viaje para otra persona</b></button>
                    <button className="bg-black text-white font-serif  rounded-xl p-2 px-[29vh]">Listo</button>
                </div>


            </div>
        </>
    )
}