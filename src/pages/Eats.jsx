import eats from "../assets/img/eats.png";
import { Link } from "react-router-dom";

export const Eats = ()=>{
     return (
        <div className="bg-gray-30 flex flex-col gap-3 mt-5 ml-5">
            <div className="flex flex-grow">
                <h1 className="text-md p-3 text-start"><b>Uber Eats</b></h1>
                <Link className="bg-gray-100 text-black font-normal p-3 rounded-lg  ml-[75%]" to={"/profile"}><b>Iniciar Sesión</b></Link>
            </div>
            <div className="bg-gray-30 flex  justify-center items-center">
                <img src={eats} alt="" />
            </div>
        </div>
     )
}