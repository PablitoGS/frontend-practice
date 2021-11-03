function Login({ eventClick, eventChange, value }) {
  return (
    <>
      <p>Introduce el nombre de un personaje de anime para hacer login</p>
      <input
        type="text"
        placeholder="ejemplo: Goku"
        value={value}
        onChange={eventChange}
      />
      <button onClick={eventClick}>Login</button>
    </>
  );
}

export default Login;
