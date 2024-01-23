import { useContext } from "react"
import { GlobalStateContext } from "../context/globalState/StateProvider"

export default function useDispatch() {

  const {dispatch} = useContext(GlobalStateContext)

  return dispatch
}