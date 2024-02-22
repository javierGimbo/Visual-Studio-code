
import './App.css';
import Formulario from './Components/Formulario.js';
function App() {
  return (
    <div className="App">
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png' alt='Logo de Pokemon'></img>
        <Formulario  /> {/* LLamada al componente principal de la aplicacion*/}
    </div>
  );
}

export default App; 

//En index.js importo un archivo llamado Formulario.css con el css que utilizo.
