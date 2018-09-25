export default function(state = 0, action) {
  switch (action.type) {
    case "UPDATE_Identification":
      const updatedIdentification = state + 1;
      return updatedIdentification;
  }
  return state;
}