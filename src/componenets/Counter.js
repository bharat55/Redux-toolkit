import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch();

  const handleClick = (message) => {
    message=="plus" ? dispatch(increment()) : dispatch(decrement());
  }

  const resetCounter = () => {
    dispatch(reset());
  }

  const handleAmountChange = (amount) => {
    setAmount(amount);
  }

  const handleAmountIncrement = () =>{
    dispatch(incrementByAmount(amount))
  }

  useEffect(() => {
    console.log("Counter Updated");
  }, [count])

  return (
    <div style={{ margin: "10px", padding: "10px"}}>
      <button type="button" onClick={() => handleClick("plus")}>Increase</button>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={() => handleClick("minus")}>Decrease</button>
      <button type="button" onClick={resetCounter}>Reset</button>
      <input
        type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => handleAmountChange(e.target.value)}
      >
        </input>
        <button type="button" onClick={handleAmountIncrement}>Increment By Amount</button>
    </div>
  )
}

export default Counter