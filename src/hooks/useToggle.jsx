import { useState } from "react"

export default function useToggle(initialValue) {

  const [toggle, setToggle] = useState(initialValue || false)

  const toggleHandler = () => {
    setToggle((state)=> !state)
  }

  return [ toggle, toggleHandler ]
}