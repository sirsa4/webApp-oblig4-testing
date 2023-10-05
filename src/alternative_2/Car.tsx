import { useState } from "react"

type CarType = {
  type: string,
}

const Car = ({type}: CarType) => {
    const [carName, setCarName] = useState<string>(type);
  return (
    <div>
        <p>Card name is: {carName}</p>
    </div>
  )
}

export default Car