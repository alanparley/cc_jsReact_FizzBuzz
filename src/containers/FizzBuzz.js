import {useState, useEffect} from 'react';


const FizzBuzz = () => {

  const [currentNumber, setCurrentNumber] = useState(1);
  const [resultNumber, setResultNumber] = useState ("");
  const [showResult, setShowResult] = useState(false);

  const handleInc = () => {
      setCurrentNumber(currentNumber + 1);
      setShowResult(false)

  }
  const handleClick = () => {
    handleInc()
  }

  const handleShowResult = () => {
    setShowResult(true);
  }

  const calcResult = () => {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      return "FizzBuzz";
    } else if (currentNumber % 3 === 0) {
      return "Fuzz";
    } else if (currentNumber % 5 === 0) {
      return "Buzz";
    } else {
      return currentNumber;
    }
  }

  useEffect (()=>{
    setResultNumber(calcResult());
  }, [currentNumber])

  return (
    <>
      <h1>Fizz Buzz Game!</h1>
      <h2> Number is {currentNumber} </h2>
      { showResult ? <h2>Result is {resultNumber}</h2> : null}
      <button onClick={handleShowResult}> Show Result</button>
      <button onClick={handleClick}>Next Number</button>




    </>
  )
}

export default FizzBuzz;
