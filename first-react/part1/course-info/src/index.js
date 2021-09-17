import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './Heading'
import Content, {Part} from './Content'
import Total from './Total'
import Avatar from './Avatar'

const App = () => {
  const textCourse = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 =7
  const part3 = 'State of a component'
  const exercises3 = 14
  const user = 'Pablo'
  const id = 72


  return (
    <>
      <Avatar id={id} userName={user}/>
      <Heading text={textCourse}/>
      <Content>
        <Part text={part1} exercises={exercises1}/>
        <Part text={part2} exercises={exercises2}/>
        <Part text={part3} exercises={exercises3}/>
      </Content>
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))