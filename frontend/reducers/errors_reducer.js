import { combineReducers } from "redux";
import educationErrorsReducer from "./education_errors_reducer";
import experienceErrorsReducer from "./experience_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  educations: educationErrorsReducer,
  experiences: experienceErrorsReducer
});

export default errorsReducer;