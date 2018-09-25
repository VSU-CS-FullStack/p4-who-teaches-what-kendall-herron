const initialstate = [
  {classNum: "1000", code: "CS 1000", name: "Introduction to Microcomputers and Applications",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "1010", code: "CS 1010", name: "Algorithmic Problem Solving",semester: "Fall 2019", creditHours: 3, numberOfSections: 3},
  {classNum: "1301", code: "CS 1301", name: "Principles of Programming I",semester: "Fall 2019",creditHours: 4,numberOfSections: 3},
  {classNum: "1302", code: "CS 1302", name: "Principles of Programming II", semester: "Fall 2019",creditHours: 4, numberOfSections: 2},
  {classNum: "1340", code: "CS 1340", name: "Computing for Scientists",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "2620", code: "CS 2620", name: "Discrete Structures",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "3101", code: "CS 3101", name: "Computer Organization", semester: "Fall 2019",creditHours: 3, numberOfSections: 1},
  {classNum: "3300", code: "CS 3300", name: "UNIX Programming",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "3335", code: "CS 3335", name: "The C Programming Language", semester: "Fall 2019",creditHours: 3, numberOfSections: 1},
  {classNum: "3340", code: "CS 3340", name: "Web Programming",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "3410", code: "CS 3410", name: "Data Structures", semester: "Fall 2019",creditHours: 3, numberOfSections: 1},
  {classNum: "3520", code: "CS 3520", name: "Algorithms",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4121", code: "CS 4121", name: "Data Communications and Networks I", semester: "Fall 2019",creditHours: 3, numberOfSections: 1},
  {classNum: "4321", code: "CS 4321", name: "Software Engineering I",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4330", code: "CS 4330", name: "Theory of Programming Languages", semester: "Fall 2019",creditHours: 3, numberOfSections: 1},
  {classNum: "4345", code: "CS 4345", name: "Operating Systems",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4500", code: "CS 4500", name: "Formal Languages and Automata Theory",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4721", code: "CS 4721", name: "Database Design I",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4820", code: "CS 4820", name: "Artificial Intelligence",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4830", code: "CS 4830", name: "Computer Graphics",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4900", code: "CS 4900", name: "Senior Seminar",semester: "Fall 2019", creditHours: 3, numberOfSections: 1},
  {classNum: "4990", code: "CS 4990", name: "Topics in Computer Science", semester: "Fall 2019",creditHours: 3, numberOfSections: 1}
];

export default function(state = initialstate, action) {
  switch (action.type) {
    case "ADD_CLASSES":
      const addedClasses = [...state, { ...action.payload, numberOfSections: 1 }];
      if (
        state.findIndex(function(classes) {
          return classes.classNum === action.payload.classNum;
        }) < 0
      ) {
        return addedClasses.sort((classes1, classes2) => {
          return classes1.classNum - classes2.classNum;
        });
      } else {
        return state.map(classes => {
          if (classes.code === action.payload.code) {
            return Object.assign({}, classes, {
              numberOfSections: classes.numberOfSections + 1
            });
          } else {
            return classes;
          }
        });
      }
    case "UPDATE_CLASSES":
      return state.map(classes => {
        return classes.code === action.payload.code &&
          action.payload.numberOfSections > 0
          ? Object.assign({}, classes, {
              numberOfSections: classes.numberOfSections - 1
            })
          : classes;
      });
    case "REMOVE_CLASSES":
      if (action.payload.numberOfSections === 1) {
        return state.filter(classes => classes.numberOfSections !== 0);
      }
  }
  return state;
}
