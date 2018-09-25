export default function(state = null, action) {
  switch (action.type) {
    case "PROFESSORS_SELECTED":
      return action.payload;
  }
  return state;
}
