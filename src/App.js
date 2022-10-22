import React, { useState } from 'react'
import "./app.css";

const App = () => {
    const [result, setResult] = useState("Winner")
    const [randomNumber, set] = Math.floor(Math.random() * 100) + 1;
    // const randomNumber = 80;
    console.log(randomNumber)
    const analyzeResult = (e) => {
        console.log(e.target.value)
        const guessedNumber = e.target.value
        if (guessedNumber == randomNumber) {
            setResult("Winner")
        }
        else if (guessedNumber <= randomNumber - 10) {
            setResult("Too Low")
        }
        else if (guessedNumber <= randomNumber) {
            setResult("Low")
        }
        else if (guessedNumber >= randomNumber + 10) {
            setResult("Too High")
        }
        else if (guessedNumber >= randomNumber) {
            setResult("High")
        }
    }
    return (
        <div className='app-container'>
            <div className='game'>
                {randomNumber}
                <h4>Number Guessing Game</h4>
                <input type="number" name="guessedNumber" onChange={analyzeResult} placeholder='Guess the Number' />
                <span>
                    {result}
                </span>
            </div>
        </div>
    )
}

export default App