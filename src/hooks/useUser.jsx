import { useContext } from "react"
import { GlobalStateContext } from "../context/globalState/StateProvider"

export default function useUser() {

  const {state} = useContext(GlobalStateContext)

  const user = state?.authInfo

  return user
}