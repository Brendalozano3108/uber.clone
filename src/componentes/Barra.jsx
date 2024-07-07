import { Link } from "react-router-dom";
import { useState } from "react";
import { Popup } from "./popUp.jsx";

export const Barra = () => {
    const [pop, setPop] = useState(false)
    return (
        <div className="flex flex-grow  bg-black
        items-center font-sans mr-[5%]  p-3">
            <div onClick={()=>setPop(true)} className="bg-black text-white w-full h-4  rounded-2xl px-5 py-2 ml-5 text-2xl mb-3"><b>Uber</b></div>
            <div onClick={()=>setPop(true)} className="bg-black  text-white w-full h-4  rounded-2xl px-5 py-2 text-sm"><b>Viaje</b></div>
            <div onClick={()=>setPop(true)} className=" bg-black  w-full h-4 text-white rounded-2xl px-5 py-2 text-sm"><b>Conducir</b></div>
            <div onClick={()=>setPop(true)} className=" bg-black  w-full h-4 text-white  rounded-2xl px-5 py-2 text-sm mb-3 "><b>Uber para Empresas</b></div>
            <div></div>
            <div onClick={()=>setPop(true)} className="bg-black  text-white w-full h-4 rounded-2xl px-5 py-2 text-sm mb-3 "><b>Uber Eats</b></div>
            <div onClick={()=>setPop(true)} className="bg-black  text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm mb-3"><b>Más Información</b></div>
            
            
            <div onClick={()=>setPop(true)} className="bg-black ml-9 text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm mt-2 "><b>🌐 ES</b></div>
            <div onClick={()=>setPop(true)} className="bg-black text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm"><b>Ayuda</b></div>
            <div onClick={()=>setPop(true)} className="bg-black text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm"><b>Ayuda</b></div>
            <Link className="  rounded-2xl bg-white text-black mt-2 px-[8vh] py-1 text-sm w-[55vh] " to={"/profile"}><b>Inicia sesión</b></Link>
            {pop && <Popup setPop={setPop}/>}

            <Link className="rounded-2xl bg-white text-black mt-2 px-[7vh] py-4 text-sm w-[55vh]  ml-2" to={"/profile"}><b>Registrate</b> </Link>
            {pop && <Popup setPop={setPop}/>}
            
            
            
           

        </div>
    );
};
