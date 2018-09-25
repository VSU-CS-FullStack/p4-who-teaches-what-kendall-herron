export default function(state = null, action) {
  switch (action.type) {
    case "CLASSES_SELECTED":
      return action.payload.classes;
    case "UPDATE_CLASSES":
      const updatedClasses = {
        ...action.payload
      };
      return updatedClasses;
  }
  return state;
}
