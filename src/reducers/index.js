import { combineReducers } from "redux";
import ClassesReducer from "./reducer_classes";
import ProfessorsReducer from "./reducer_professors";
import AssignmentReducer from "./reducer_assignments";
import ActiveClassesReducer from "./reducer_active_classes";
import ActiveProfessorsReducer from "./reducer_active_professors";
import IdentificationReducer from "./reducer_identification";

const rootReducer = combineReducers({
	classes: ClassesReducer,
	professors: ProfessorsReducer,
	assignment: AssignmentReducer,
	identification: IdentificationReducer,
	activeClasses: ActiveClassesReducer,
	activeProfessors: ActiveProfessorsReducer
});

export default rootReducer;
