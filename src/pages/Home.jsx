
import { Barra } from '../componentes/Barra';
import uber1 from "../assets/img/uber1.png";
import uber2 from "../assets/img/uber2.png";
import uber3 from "../assets/img/uber3.png";
import uber4 from "../assets/img/uber4.png";
import uber5 from "../assets/img/uber5.png";
import uber6 from "../assets/img/uber6.png";
import uber7 from "../assets/img/uber7.png";
import uber8 from "../assets/img/uber8.png";
import face from "../assets/img/face.png";
import x from "../assets/img/x.png";
import you from "../assets/img/you.png";
import inn from "../assets/img/inn.png";
import inst from "../assets/img/inst.png";
import { Link } from 'react-router-dom';


export const Home = () => {

  return (
    <>
      <div className='bg-black w-full gap-3 flex flex-col padre'>

        <div className="" >
          <Barra />
        </div>
        <div className='carta1 bg-black mt-[6%] flex flex-row relative'>
          <div className=' bg-black ml-5 flex flex-col mt-[10%]'>
            <img className='w-[100%]' src={uber1} alt="" />
            <p className='text-white ml-[13%] mt-3'>Pide un viaje, súbete al vehículo y relájate.</p>
            <div className='flex flex-col mt-2 ml-[9%]'>
              <input type="text" placeholder='Ingresa Ubicación' className='p-3 ml-[5%] mr-[20%] rounded-lg' />
              <input type="text" placeholder='Ingresa Destino' className='p-3 ml-[5%] mr-[20%] rounded-lg mt-3' />
              <Link className=" prec rounded text-black mt-4 px-5 py-3 text-sm  bg-slate-200 font-serif w-[25vh] ml-6 text-center" to={"/precios"}><b>Ver Precios</b></Link>
            </div>
          </div>
          <div>
            <img className='w-[100%] gap-6 rounded ml-[27%] mb-[10%]' src={uber2} alt="" />
          </div>
        </div>
        <div className=' carta2 bg-white flex flex-row gap-5 '>
          <div className=''>
            <img className='w-[100%] h-[100%] mt-[12%] rounded-lg ml-[20%]' src={uber4} alt="" />
          </div>
          <div className='flex flex-col gap-0 ml-5 mt-5 '>
            <div className='mt-4 '>
              <img className='w-[70%] ml-[20%] h-[80%]' src={uber3} alt="" />
              <p className='mt-[5%] ml-[20%] text-left'>Genera ganancias en tu propio tiempo con entregas, viajes o ambos. Puedes usar tu propio auto u optar por un vehículo de renta a través de la app de Uber</p>
            </div>
            <div className=' ml-[23%] flex text-center gap-[2%] mt-5'>
              <Link className='bg-black rounded-md text-white p-3 px-6' to={"/profile"}><b>Comenzar</b></Link>
              <button className=''><u>¿Ya tienes una cuenta? Inicia Sesión</u></button>
            </div>
          </div>
        </div>
        <div className='carta3  bg-white flex flex-row gap-2'>
          <div className='sm:w-1/2'>
            <div className='flex flex-col ml-[5%]'>
              <img className='w-[70%] mt-[25%] ' src={uber5} alt="" />
              <p className='mt-[5%] ml-[5%] mr-[20%]'>Uber para Empresas es una plataforma con la que las empresas de todos los tamaños pueden gestionar viajes y comidas globales, así como entregas locales.</p>
            </div>
            <div className=' mt-3 ml-[9%]'>
              <Link className='bg-black rounded-md text-white p-3 px-6' to={"/profile"}><b>Comenzar</b></Link>

              <button className='ml-4'><u>Conoce nuestras soluciones</u></button>
            </div>
          </div>
          <div className='sm:w-1/2 mr-8'>
            <img className='rounded-md mt-[20%] w-full h-[70%] mr-[10px] ' src={uber6} alt="" />
          </div>
        </div>
        <div className=' bg-gray-100 flex flex-grow center gap-6 carta 4 p-5'>
          <div className='bg-white sm:w-1/2 flex flex-grow rounded-lg mt-[7%]  mb-[7%] '>
            <img src={uber7} alt="" />
            <div className='flex flex-col text-center mt-[15%]'>
              <a className='text-3xl' href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3D05582c61-ae63-48c9-8074-9a83323703a7"><b>Descarga la app de Uber</b></a>
              <p className='font-normal'>Escanea para descargar</p>
            </div>
          </div>
          <div className='bg-white sm:w-1/2 flex flex-grow rounded-lg mt-[7%] mb-[7%] '>
            <img src={uber8} alt="" />
            <div className='flex flex-col text-center mt-[15%]'>
              <a className='text-3xl' href="https://apps.apple.com/us/app/uber-driver-drive-deliver/id1131342792?referrer=singular_click_id%3D14014af4-ae92-49d8-a978-6daabd4ae83e"><b>Descarga la app para socios</b></a>
              <p className='font-normal'>Escanea para descargar</p>
            </div>
          </div>
        </div>
        <div className='carta5 mt-[10%] ml-[5%] mr-[5%] mb-[10%]'>
          <div>
            <h1 className='text-3xl text-white'><b>Uber</b></h1>
            <p className='text-white mt-5'>Visita el Centro de ayuda</p>
          </div>
          <div className='flex flex-grow gap-[15%] mt-[5%]'>
            <div className='c1'>
              <h2 className='text-white text-xl mb-4'><b>Compañia</b></h2>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/about/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028" ><p>Quienes Somos</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/about/uber-offerings/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Lo que ofrecemos</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/es-ES/newsroom/"><p>Sala de prensa</p></a>
              <a className='text-white hover:underline' href="https://investor.uber.com/home/default.aspx"><p>Inversionistas</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/es-CO/blog/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Blog</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/careers/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Carreras</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/es-CO/blog/engineering/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>AI</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/gift-cards/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Tarjetas de Regalo</p></a>
            </div>
            <div className='c2'>
              <h2 className='text-xl text-white mb-4'><b>Productos</b></h2>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/ride/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Viaje</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/drive/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Conducir</p></a>
              <a className='text-white hover:underline' href="https://www.ubereats.com/co?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028&marketing_vistor_id=474b7246-5fbe-4bf1-9102-6751f11d8c8b&_gl=1*1p8nwj3*_ga*MTYzMzAwNTA1NS4xNzE3NTU4MjM1*_ga_XTGQLY6KPT*MTcxOTg4NzA3MS42LjEuMTcxOTg4ODUwNC4wLjAuMA.."><p>Comida</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/business/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Uber para Empresas</p></a>
              <a className='text-white hover:underline' href="https://www.uberfreight.com/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028&_gl=1*qczlee*_gcl_au*ODE2MzA3MTE2LjE3MTk4ODg1Mjg.*_ga*MTYzMzAwNTA1NS4xNzE3NTU4MjM1*_ga_XTGQLY6KPT*MTcxOTg4NzA3MS42LjEuMTcxOTg4ODU0MC4wLjAuMA.."><p>Uber Freight</p></a>
            </div>
            <div className='c3'>
              <h2 className='text-xl text-white mb-4'><b>Ciudadanía Global</b></h2>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/safety/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Seguridad</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/about/diversity/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Diversidad e inclusión</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/co/es/about/sustainability/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Sustentabilidad</p></a>
            </div>
            <div className='c4'>
              <h2 className='text-xl text-white mb-4'><b>Viajes</b></h2>
              <a className='text-white hover:underline' href="https://auth.uber.com/v2/?breeze_init_req_id=57cfe432-4662-41b0-82ea-902550d44799&breeze_local_zone=dca23&next_url=https%3A%2F%2Fm.uber.com%2Flogin-redirect%2F%3F_fallback_redirect%3Dhttp%253A%252F%252Fm.uber.com%252Freserve%26mvid%3D474b7246-5fbe-4bf1-9102-6751f11d8c8b%26previousPath%3D%252Freserve%26referrer%3Dsingular_click_id%253D32661bed-2f65-454d-87bf-7e75347058c0%26sl_id%3Do42y%26uclick_id%3D5c843252-8ed4-4df4-87df-22b6c6b3d028&state=S4XzAn0m3zM-ATnBw-kGZ5X8EdsbQnEef37-fcgN1ds%3D"><p>Reserva</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/global/es/airports/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Aereopuertos</p></a>
              <a className='text-white hover:underline' href="https://www.uber.com/global/es/cities/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><p>Ciudades</p></a>
            </div>
          </div>
          <div className='carta6 flex flex-grow mt-[5%] ml-[0.5%] mr-[5%] gap-[5%]'>
            <a href="https://www.facebook.com/uber?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><img className='w-[20px]' src={face} alt="" /></a>
            <a href="https://x.com/uber?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028&mx=2"><img className='w-[20px] rounded-md' src={x} alt="" /></a>
            <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA"><img className='w-[20px] rounded-md' src={you} alt="" /></a>
            <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F1815218%3Fuclick_id%3D5c843252-8ed4-4df4-87df-22b6c6b3d028"><img className='w-[20px]' src={inn} alt="" /></a>
            <a href="https://www.instagram.com/uber/?uclick_id=5c843252-8ed4-4df4-87df-22b6c6b3d028"><img className='w-[20px] rounded-lg' src={inst} alt="" /></a>

          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )

}

