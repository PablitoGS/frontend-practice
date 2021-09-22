const Part = ({text, exercises}) => {  
    return (
      <p>{text} {exercises}</p>
    )
}

const Content = ({children}) => {
    return (
    <div>{children}</div>
    )
}

Content.Part = Part

export default Content
