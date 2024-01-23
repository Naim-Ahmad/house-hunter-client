import { createContext, useReducer } from "react"
import useCombineReducer from "../../hooks/useCombineReducer"
import AuthReducer, { authInfo } from "./auth/AuthReducer"

export const GlobalStateContext = createContext(null)

export default function StateProvider({children}) {

  const [state, dispatch] = useCombineReducer({
    authInfo: useReducer(AuthReducer, authInfo)
  })


  return <GlobalStateContext.Provider value={{state, dispatch}}>{children}</GlobalStateContext.Provider>
 
}