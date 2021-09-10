const Message = () => {
    const heading = 'Hola mundo'
    const text = 'Hoy es '
  
    return (
      <>
      <h1>{heading}</h1>
      <p>{text + new Date()}</p>
      </>
    )
  }

  export default Message