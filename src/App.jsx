import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Perfil} from "./pages/perfil.jsx";
import {Precios} from "./pages/Precios.jsx";
import { Conducir } from "./pages/Conducir.jsx";
import { Empresas } from "./pages/Empresas.jsx";
import { Eats } from "./pages/Eats.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<Perfil/>}/>
       <Route path="/precios" element={<Precios/>}/>
       <Route path="/conducir" element={<Conducir/>}/>
       <Route path="/empresas" element={<Empresas/>}/>
       <Route path="/eats" element={<Eats/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App

