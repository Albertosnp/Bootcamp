import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>
    Esta es la app del curso de fullstack bootcamp
  </p>
};

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='blue' message='En un curso'/> 
      <Mensaje color='green' message='de React'/>      
      <Description /> 
    </div>
  );
}

export default App;
