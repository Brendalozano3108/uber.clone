export const Popotro = ({ }) => {
    
    return (
        <>
            <div className="bg-white w-[100%] h-[100vh] flex flex-col
             justify-center items-center overflow-hidden backdrop-blur-sm  z-10 rounded-lg  absolute">
                <div className="flex flex-col gap-3">
                <h1><b>Nuevo pasajero</b></h1>
                <input className="bg-slate-200 rounded-lg p-2" type="text" placeholder="Nombre"/>
                <input className="bg-slate-200 rounded-lg p-2" type="text" placeholder="Apellidos"/>
                <input className="bg-slate-200 rounded-lg p-2" type="text" placeholder="Telefono"/>
                <p className="font-normal text-gray-500 text-sm">
                    Uber no compartirá este número de teléfono con los conductores.
                </p>
                <p className="font-normal text-gray-500 text-sm">
                    Al pulsar “Añadir pasajero”, confirmas que tu amigo ha aceptado compartir su información de contacto con Uber y recibir SMS sobre este viaje.
                </p>
                <button className="bg-black rounded-lg text-white font-normal p-2">Añadir pasajero</button>
                </div>
                
            </div>

        </>
    )
}