import manejo from "../assets/img/manejo.png";
import cond1 from "../assets/img/cond1.png";
import dos from "../assets/img/dos.png";
import quene from "../assets/img/quene.png";
import seguridad from "../assets/img/seguridad.png";
import { Link } from "react-router-dom";

export const Conducir = () => {

    return (
        <div className="flex flex-col bg-black">
            <button className="bg-black text-2xl text-white font-normal text-start mb-4 ml-4 p-3"><b>Uber</b></button>
            <div className="flex flex-grow gap-3 justify-center items-center">
                <div className="flex flex-col gap-3 ">
                    <img className="w-[70vh]" src={cond1} alt="" />
                    <p className="text-normal text-gray-400 text-sm ml-[8%] mb-3">
                        Aprovecha al máximo tu tiempo al volante en la plataforma con la red más grande de usuarios activos.
                    </p>
                    <Link className="bg-gray-300 text-black font-serif p-3 rounded-lg w-[40%] ml-[8%]" to={"/profile"}><b>Resgistrate para conducir</b></Link>
                    
                    <a className="text-white text-lg ml-[7%]" href="https://bonjour.uber.com/step/7369676e-7570-7369-676e-75707369676e?uclick_id=aa54c07d-9e91-4705-82eb-c08e555a6f45&marketing_vistor_id=474b7246-5fbe-4bf1-9102-6751f11d8c8b&_gl=1*gzaxgo*_gcl_au*ODE2MzA3MTE2LjE3MTk4ODg1Mjg.*_ga*MTYzMzAwNTA1NS4xNzE3NTU4MjM1*_ga_XTGQLY6KPT*MTcyMTE3MDYxNS4yNS4xLjE3MjExNzI3NzcuMC4wLjA."><u>¿Ya tienes una cuenta? Inicia Sesión</u></a>
                </div>
                <div>
                    <img src={manejo} alt="" />
                </div>
            </div>
            <div className="bg-white flex justify-center items-center">
                
                <img src={dos} alt="" />
                
            </div>
            <div className="bg-white flex  justify-center items-center">
                
                <img className="" src={quene} alt="" />
    
            </div>
            <div className="bg-white flex  justify-center items-center">
                
                <img className="" src={seguridad} alt="" />
    
            </div>
            <div></div>
        </div>
    )
}