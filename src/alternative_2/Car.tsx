import { useState } from "react"

type CarType = {
  type: string,
}

const Car = ({type}: CarType) => {
    const [carName, setCarName] = useState<string>(type);
  return (
    <div>
      <h1>car component</h1>
        <p>Card name is: {carName}</p>
    </div>
  )
}

export default Car