import image from "../assets/img/image.jpg";
export const Popup = ({ cerrar }) => {
    return (
        <>
            <div className=" w-[100%] h-[100vh] flex flex-col justify-center items-center overflow-hidden backdrop-blur-sm  z-10 rounded-lg absolute  ">
                <div className="bg-white gap-3 px-5 py-5 justify-center flex flex-col border rounded-xl ">
                    <div className="flex flex-grow justify-center items-center gap-[5%]">
                         <h1 className="text-black text-xl"><b>Inicia sesión con código Qr</b></h1>
                        <button className="text-black text-xl z-20 items-star  " onClick={cerrar}><b>X</b></button>
                    </div>
                    
                    <ol className="text-black font-serif mt-5">
                        <li>1. Escanea este código QR con la cámara de tu teléfono.</li>
                        <li>2. Una vez escaneada, abriremos la app Uber para iniciar sesión</li>
                    </ol>
                    <div className="bg-blue-200 rounded-lg p-4 text-black font-serif mt-5">
                        <p> Debes iniciar sesión en tu app Uber y ambos dispositivos deben compartir el mismo wifi o punto de acceso.</p>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-[25vh]  " src={image} alt="" />   
                    </div>

                </div>

            </div>

        </>
    )
}
