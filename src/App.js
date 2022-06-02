import React from 'react'

const Header=(props)=>{
   return(
     <div>
       <p>
        {props.part1} {props.part2} {props.part3}
       </p>
     </div>
   )
}
const Content=(props)=> {
  return(
    <div>
      <p>
        {props.exercises1}
        {props.exercises2}
        {props.exercises3}
      </p>
    </div>
  )
}

const Total=(props)=>{
  return(
    <div>
      <p>{props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  return (
    <div>
      <h1>{course}</h1>
      课程名称
     <Header part1= 'Fundamentals of React'/>
     <Header part2='Using props to pass data' />
     <Header part3='State of a component' />
     课程章节
     <Content exercises1='10' />
     <Content exercises2='7' />
     <Content exercises1='14' />
     总数  <Total total={10+7+14} />
 
    </div>
  )
  }

export default App