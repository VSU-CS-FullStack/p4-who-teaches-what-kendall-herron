export function selectClasses(classes, professors) {
  return {
    type: "CLASSES_SELECTED",
    payload: { classes: classes}
  };
}
export function updateClasses(classes) {
  return {
    type: "UPDATE_CLASSES",
    payload: classes
  };
}
export function addClasses(classes) {
    return {
    type: "ADD_CLASSES",
    payload: classes
    };
}
export function updateProfessors(professors, classes) {
  return {
    type: "UPDATE_PROFESSORS",
    payload: { professors: professors, classes: classes }
  };
}
export function removeClasses(classes) {
    return {
    type: "REMOVE_CLASSES",
    payload: classes
    };
}
export function downgradeProfessors(professors, classes) {
  return {
    type: "DOWNGRADE_PROFESSORS",
    payload: { professors: professors, classes: classes }
  };
}
export function selectProfessors(professors) {
  return {
    type: "PROFESSORS_SELECTED",
    payload: professors
  };
}
export function updateIdentification(identification) {
  identification++;
  return {
    type: "UPDATE_Identification",
    payload: identification
  };
}

export function updateAssignment(classes, professors, identification) {
  return {
    type: "UPDATE_ASSIGNMENT",
    payload: {classes: classes, professors: professors, identification: identification }
  };
}
export function removeAssignment(classes, professors, identification) {
    return {
    type: "REMOVE_ASSIGNMENT",
    payload: { classes: classes, professors: professors, identification: identification }
    };
}
