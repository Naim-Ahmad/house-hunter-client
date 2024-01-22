
export default function useCombinedReducer(reducerObject) {
  // global state
  const state = Object.keys(reducerObject).reduce((acc, key)=> ({ ...acc, [key]: reducerObject[key][0] }))

  // global dispatch function
  const dispatch = (action)=> Object.keys(reducerObject).map(key=> reducerObject[key][1]).forEach(fn=> fn(action))

  return [state, dispatch]
}