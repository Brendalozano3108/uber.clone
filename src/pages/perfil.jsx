import { Popup } from "../componentes/popUp";
import { useState } from "react";
import google from "../assets/img/google.png";
import apple from "../assets/img/apple.png";
import esc from "../assets/img/esc.png";
import { auth } from "../configFire/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";

export const Perfil = () => {
  const registro = (user) => {
    // console.log("hello word");
    createUserWithEmailAndPassword(auth, user.email, user.password).then(
      (respuesta) => {
        console.log(respuesta);
      }
    );
  };

    //const seguir = getAuth();
    //signInWithEmailAndPassword(auth, "", "").then((userCredential) => {
     //const usuario = userCredential.user;
    //});
    

  const [pop, setPop] = useState(false);

  const [user, setUser] = useState({ email: "", password: "" });

  const abrir = () => {
    setPop(true);
  };
  const cerrar = () => {
    setPop(false);
  };
  return (
    <div className="relative ">
      {pop && <Popup cerrar={cerrar} />}
      <button
        className="bg-black text-white p-3 w-full text-start text-xl"
        onClick={cerrar}
      >
        <b> Uber</b>
      </button>
      <div className="mt-[3%] flex flex-col  gap-3 text-center w-[201vh] px-[35%]">
        <h1 className="text-xl text-black">
          <b>¿Quieres iniciar sesión o Resgistrarte?</b>
        </h1>
        <input
          className="border-s-black rounded-lg text-black p-3"
          type="text"
          placeholder=" Introducir número de télefono o email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input className="border-s-black rounded-lg text-black p-3"
          type="text"
          placeholder=" Introducir contrasena"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={() => registro(user)}
          className="bg-black rounded-lg text-white p-3  hover:bg-gray-500 transition-colors duration-300 ease-in-out"
        >
          Continuar
        </button>
        <button className="bg-gray-200 font-serif rounded-lg flex gap-[17%] p-3  hover:bg-blue-200 transition-colors duration-300 ease-in-out">
          <img className="w-[4vh]" src={google} alt="" />
          Continuar con google
        </button>
        <button className="bg-gray-200 font-serif rounded-lg flex gap-[17%] p-3  hover:bg-blue-200 transition-colors duration-300 ease-in-out">
          <img className="w-[4vh]" src={apple} alt="" />
          Continuar con Apple
        </button>
        <button
          onClick={abrir}
          className="bg-gray-100 flex items-center text-black w-full h-4  p-[4vh] gap-6 font-serif hover:bg-blue-200 transition-colors duration-300 ease-in-out"
        >
          <img className="w-[4vh]" src={esc} alt="" />
          Inicia sesión con el código Qr
        </button>
        <p className="text-gray-400 text-sm mt-3">
          Al continuar, aceptas recibir llamadas, mensajes de WhatsApp o SMS,
          incluso por medios automatizados, de Uber y sus filiales en el número
          proporcionado.
        </p>
      </div>
    </div>
  );
};
