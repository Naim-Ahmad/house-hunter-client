import { useState } from "react"

export default function useToggle(initialValue) {

  const [toggle, setToggle] = useState(initialValue || false)

  const toggleHandler = () => {
    setToggle(!toggle)
  }

  return [ toggle, toggleHandler ]
}