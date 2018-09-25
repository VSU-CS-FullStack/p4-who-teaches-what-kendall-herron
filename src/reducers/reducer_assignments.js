const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_ASSIGNMENT":
      return state.filter(assignment => assignment.identification !== action.payload.identification);

    case "UPDATE_ASSIGNMENT":
      if (action.payload.classes.numberOfSections > 0) {
        const updatedItems = [...state, { ...action.payload }];

        return updatedItems.sort((first, second) => {
          if (
            first.professors.profName.split(" ")[2] <
            second.professors.profName.split(" ")[2]
          )
            return -1;
          else if (
            first.professors.profName.split(" ")[2] >
            second.professors.profName.split(" ")[2]
          )
            return 1;
          return 0;
        });
      }
  }
  return state;
}
