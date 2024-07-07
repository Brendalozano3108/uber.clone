
import { Popup } from "../componentes/popUp";
import { useState } from "react";
import google from "../assets/img/google.png";
import apple from "../assets/img/apple.png";
import esc from "../assets/img/esc.png";


export const Perfil = () => {
    const [pop, setPop] = useState(false);

    const abrir = () => {
        setPop(true);
    };
    const cerrar = () => {
        setPop(false);
    };

    return (
        <div className="relative ">
            {pop && <Popup cerrar={cerrar} />}
            <button className="bg-black text-white p-3 w-full text-start text-xl" onClick={cerrar}><b> Uber</b></button>
            <div className="mt-[3%] flex flex-col  gap-3 text-center w-[201vh] px-[35%]">
                <h1 className="text-xl text-black"><b>¿Quieres iniciar sesión o Resgistrarte?</b></h1>
                <input className="border-s-black rounded-lg text-gray-300 p-3" type="text" placeholder=" Introducir número de télefono o email" />
                <button className="bg-black rounded-lg text-white p-3  hover:bg-gray-500 transition-colors duration-300 ease-in-out">Continuar</button>
                <button className="bg-gray-200 font-serif rounded-lg flex gap-[17%] p-3  hover:bg-blue-200 transition-colors duration-300 ease-in-out"><img className="w-[4vh]" src={google} alt="" />Continuar con google</button>
                <button className="bg-gray-200 font-serif rounded-lg flex gap-[17%] p-3  hover:bg-blue-200 transition-colors duration-300 ease-in-out"><img className="w-[4vh]" src={apple} alt="" />Continuar con Apple</button>

                //<button onClick={abrir} className="bg-gray-100 flex items-center text-black w-full h-4  p-[4vh] gap-6 font-serif hover:bg-blue-200 transition-colors duration-300 ease-in-out"><img className="w-[4vh]" src={esc} alt="" />Inicia sesión con el código Qr</button>

                <p className="text-gray-400 text-sm mt-3">Al continuar, aceptas recibir llamadas, mensajes de WhatsApp o SMS, incluso por medios automatizados, de Uber y sus filiales en el número proporcionado.</p>



            </div>
        </div>
    )

}





