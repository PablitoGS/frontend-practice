import './App.css';
import Heading from './Heading';
import Message from './Message';

function App() {
  const title = 'Hoy es'
  const date = new Date();

  return (
    <div className="App">
      <Heading text="Hola mundo" />
      <p>{title + date}</p>
      <Message text="Una linea de texto por aquí" />
      <Message color="green" text="Otra linea de texto por acá de color con style" />
    </div>
  );
}

export default App;
