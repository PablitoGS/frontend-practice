import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import Heading from './Heading'
import Content from './Content'
import ContentCopy from './ContentCopy'
import Total from './Total'
import Avatar from './Avatar'

const App = () => {

  const textCourse = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  const user = 'Pablo'
  const id = 72


  return (
    <>
      <Avatar id={id} userName={user}/>
      <Heading text={textCourse}/>
      <Content>
        <Content.Part text={parts[0].name} exercises={parts[0].exercises}/>
        <Content.Part text={parts[1].name} exercises={parts[1].exercises}/>
        <Content.Part text={parts[2].name} exercises={parts[2].exercises}/>
      </Content>
      <Total arrSum={parts} />
      <hr/>
      <ContentCopy arr={parts}/>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
