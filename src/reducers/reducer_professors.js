const initialState = [
  {
    profName: "Dr. Sudip Chakraborty",
    numberOfCreditHours: 0,
    numberOfClasses: 0
  },
  {
    profName: "Dr. Anurag Dasgupta",
    numberOfCreditHours: 0,
    numberOfClasses: 0
  },
  { profName: "Dr. Said Fares", numberOfCreditHours: 0, numberOfClasses: 0 },
  { profName: "Dr. Dave Gibson", numberOfCreditHours: 0, numbrOfClasses: 0 },
  { profName: "Dr. Chunlei Liu", numberOfCreditHours: 0, numberOfClasses: 0 },
  {
    profName: "Dr. Radu Paul Mihail",
    numberOfCreditHours: 0,
    numberOfClasses: 0
  },
  {
    profName: "Dr. Krishnendu Roy",
    numberOfCreditHours: 0,
    numberOfClasses: 0
  },
  { profName: "Dr. Zhiguang Xu", numberOfCreditHours: 0, numberOfClasses: 0 }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case "DOWNGRADE_PROFESSORS":
      const p = action.payload.professors;
      const c = action.payload.classes;
      return state.map(professors => {
        return professors.profName === p.profName
          ? Object.assign({}, professors, {
              numberOfClasses: professors.numberOfClasses - 1,
              numberOfCreditHours:
                professors.numberOfCreditHours - c.creditHours
            })
          : professors;
      });

    case "UPDATE_PROFESSORS":
      const updateProfessors = action.payload.professors;
      const updateClasses = action.payload.classes;
      return state.map(professors => {
        return professors.profName === updateProfessors.profName &&
          updateClasses.numberOfSections > 0
          ? Object.assign({}, professors, {
              numberOfClasses: professors.numberOfClasses + 1,
              numberOfCreditHours:
                professors.numberOfCreditHours + updateClasses.creditHours
            })
          : professors;
      });
  }
  return state;
}
