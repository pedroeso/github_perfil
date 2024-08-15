import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
      <div className="container mt-3">
        <input
          type="text"
          className="form-control mb-3" 
          placeholder="Digite seu nome do seu Github"
          onBlur={(e) => setNomeUsuario(e.target.value)}
        />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario />
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
    toggle form
    </button> */}
    </div>
    </>
  )
}

export default App
