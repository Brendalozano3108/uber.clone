import { Link } from "react-router-dom";
import { useState } from "react";
import { Popup } from "./popUp.jsx";

export const Barra = () => {
    const [pop, setPop] = useState(false);

    return (
        <div className="barra flex flex-grow  bg-black
        items-center font-sans mr-[5%]  p-3 ">
            <div onClick={() => setPop(true)} className="bg-black text-white  h-4  rounded-2xl px-5 py-2 ml-5 text-2xl mb-3"><b>Uber</b></div>
            <Link className="  rounded text-white mt-4 px-5 py-3 text-sm  bg-black font-normal w-[25vh] ml-6 text-center" to={"/precios"}><b>Viaje</b></Link>
            <Link className="  rounded text-white mt-4 px-5 py-3 text-sm  bg-black font-normal w-[25vh] ml-6 text-center" to={"/conducir"}><b>Conducir</b></Link>
            <Link className="  rounded text-white mt-4 px-5 py-3 text-sm  bg-black font-normal w-[25vh] ml-6 text-center" to={"/empresas"}><b>Uber para empresas</b></Link>
            <Link className="  rounded text-white mt-4 px-5 py-3 text-sm  bg-black font-normal w-[25vh] ml-6 text-center" to={"/eats"}><b>Uber Eats</b></Link>
            <div className="bg-black  text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm mb-3"><b>Más Información</b></div>

            <a className="bg-black ml-9 text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm mt-2 " href="https://www.uber.com/co/es/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><b>🌐 ES</b></a>

            <a className="bg-black ml-9 text-white w-full h-4 login rounded-2xl px-5 py-2 text-sm mt-2 " href="https://help.uber.com/?_gl=1*w58igs*_gcl_au*ODE2MzA3MTE2LjE3MTk4ODg1Mjg.*_ga*MTYzMzAwNTA1NS4xNzE3NTU4MjM1*_ga_XTGQLY6KPT*MTcyMTE3NzQxNi4yNi4xLjE3MjExNzg1NDUuMC4wLjA.&uclick_id=aa54c07d-9e91-4705-82eb-c08e555a6f45&_csid=SVQdLfUqGBVtjhW-TLgLiA&state=PFuOVJMIrpk2sqLkQph-IAm6ZbgcqYEGQcMUe0J31Cw%3D&effect="><b>Ayuda</b></a>
            
            <Link className="  rounded-2xl text-white mt-2 px-[8vh] py-1 text-sm w-[55vh] " to={"/profile"}><b>Inicia sesión</b></Link>
            {pop && <Popup setPop={setPop} />}

            <Link className="rounded-2xl bg-white text-black mt-2 px-[7vh] py-4 text-sm w-[55vh]  ml-2" to={"/profile"}><b>Registrate</b> </Link>
            {pop && <Popup setPop={setPop} />}





        </div>
    );
};
