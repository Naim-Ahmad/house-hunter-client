import { createContext, useEffect, useReducer } from "react"
import { axiosSecure } from "../../hooks/useAxiosSecure"
import useCombineReducer from "../../hooks/useCombineReducer"
import AuthReducer, { authInfo } from "./auth/AuthReducer"
import { setUser } from "./auth/actions"

export const GlobalStateContext = createContext(null)

export default function StateProvider({children}) {

  const [state, dispatch] = useCombineReducer({
    authInfo: useReducer(AuthReducer, authInfo)
  })


  useEffect(()=> {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // console.log(Boolean(isLoggedIn))

    if(isLoggedIn){
      // console.log('first')
      axiosSecure.get('/api/auth/loggedUser')
      .then(res=> {
        dispatch(setUser(res.data))
      })
      .catch(err=> {
        console.log(err)
      })
    }

  }, [])

  return <GlobalStateContext.Provider value={{state, dispatch}}>{children}</GlobalStateContext.Provider>
 
}