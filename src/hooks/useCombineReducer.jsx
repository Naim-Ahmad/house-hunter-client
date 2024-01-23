
export default function useCombineReducer(combinedReducers) {
  // global state
  const state = Object.keys(combinedReducers).reduce(
    (acc, key) => ({ ...acc, [key]: combinedReducers[key][0] }),
    {}
  );

  // global dispatch function
  const dispatch = action =>
    Object.keys(combinedReducers)
      .map(key => combinedReducers[key][1])
      .forEach(fn => fn(action));

  return [state, dispatch]
}