import React, { useEffect } from 'react'

function Fruit() {
  const fruits = ["Apple", "Banana", "Mango"]

  useEffect(() => {
    console.log("Component Did mount");
    return function(){
      console.log("Component Unmounted")
    }
  }, [])


  return (
    <div>
      <ul>
        {
          fruits.map((fruit, index) => (<li key={index}>Fruit: {fruit}</li>))
        }
      </ul>
    </div>
  )
}

export default Fruit