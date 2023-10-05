import { useState } from "react"


const Car = () => {
    const [carName, setCarName] = useState<string>("");
  return (
    <div>
        <p>Card name is: {carName}</p>
    </div>
  )
}

export default Car