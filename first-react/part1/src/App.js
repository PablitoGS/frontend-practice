import './App.css';
import Heading from './Heading';
import Message from './Message';
import Avatar from './Avatar'



function App() {
  const title = 'Hoy es'
  const date = new Date();

  return (
    <div className="App">
      <Avatar id="1" size="small" alt="Epi" name="Epi"/>
      <Avatar id="3" alt="Blas" name="Blas"/>
      <Avatar id="5" size="large" name="Paco" />{/*  Alt is avastar */}
      <Avatar size="large" name="Pepe"/>{/*  Sin id */}
      <p>Click Image</p>
      <Heading text="Hola mundo" />
      <p>{title + date}</p>
      <Message text="Una linea de texto por aquí" />
      <Message color="green" text="Otra linea de texto por acá de color con style" />
    </div>
  );
}

export default App;
