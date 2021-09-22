const ContenPart = ({text, exercises}) => {
    return (
      <p>{text} {exercises}</p>
    )
}

const ContentCopy = ({arr}) => {

  const arrParts = arr.map((item, index) => {
      return <ContenPart key={index} text={item.name} exercises={item.exercises} />
    })
    return (
      <>
      {arrParts}
      </>
    )
    
}

export default ContentCopy
