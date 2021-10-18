import { combineReducers } from "redux";
import educationErrorsReducer from "./education_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  educations: educationErrorsReducer
});

export default errorsReducer;