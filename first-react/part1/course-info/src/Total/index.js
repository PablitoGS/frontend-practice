const Total = ({arrSum}) => {
    const listArr = arrSum.map(item => item.exercises)
    const suma = listArr.reduce((prev, next) => prev + next,0)
    
    return(
    <p>Number of exercises {suma}</p>
    ) 
  }

  export default Total