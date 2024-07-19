import conductor from "../assets/img/conductor.png";

export const Popconductor =({}) => {

    return (
        <>
        <div className=" w-[100%] h-[100vh] flex flex-col bg-white
             justify-center items-center overflow-hidden backdrop-blur-sm  z-10 rounded-lg  absolute">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className=" text-3xl font-normal"><b>¡En hora buena, tú conductor va en camino hacia tí!</b></h1>
                    <img className="w-[40vh]" src={conductor} alt="" />
                </div>
            
        </div>
        </>
    )
}