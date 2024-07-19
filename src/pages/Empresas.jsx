import pc from "../assets/img/pc.png";
import adapta from "../assets/img/adapta.png";
import global from "../assets/img/global.png";
import unete from "../assets/img/unete.png";
import { Link } from "react-router-dom";


export const Empresas = () =>{

    return (
        <div className="bg-black">
            <button className="text-white text-xl font-normal p-6"><b>Uber for business</b></button>
            <div className="flex flex-grow justify-center items-center mr-5">
                <div className="flex flex-col mt-4 ml-5 gap-3">
                    <h1 className="text-white text-4xl ml-[5%] w-[50%]">
                        <b>!Te damos la bienvenida, te prepararemos en todo!</b>
                    </h1>
                    <p className="text-white  text-sm flex justify-center items-center ml-[5%] font-normal">
                        <b>Estás a punto de completar la configuración de tu cuenta Uber para Empresas. Con una sola plataforma, puedes crear programas para satisfacer las necesidades de viaje, comida y regalos de todo tu personal o clientes.</b>
                     
                    </p>
                    <Link className='bg-gray-300 rounded-md text-black p-3 w-[30vh] ml-[5%]' to={"/profile"}>Registra tu compañia</Link>
                </div>
                <div>
                    <img className="w-[200vh]" src={pc} alt="" />
                </div>
            </div>
            <div className="bg-black mt-5 flex  justify-center items-center">
                <img className="w-[95%] " src={adapta} alt="" />
            </div>
            <div className="bg-black mt-5 flex  justify-center items-center">
                <img className="mt-5" src={global} alt="" />
            </div>
            <div className="bg-gray-100 mt-5 flex  justify-center items-center">
                <img className="mt-5" src={unete} alt="" />
            </div>
        </div>
    )
}