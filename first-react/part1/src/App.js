import './App.css';

const Mensaje = () => {
  const heading = 'Hola mundo'
  const text = 'Hoy es '

  return (
    <>
    <h1>{heading}</h1>
    <p>{text + new Date()}</p>
    </>
  )
}

function App() {

  return (
    <div className="App">
      <Mensaje />
    </div>
  );
}

export default App;
