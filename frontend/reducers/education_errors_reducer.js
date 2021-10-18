import { RECEIVE_EDUCATION_ERRORS, CLEAR_EDUCATION_ERRORS} from '../actions/education_actions'

const educationErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
      case RECEIVE_EDUCATION_ERRORS:
          return action.errors;
      case CLEAR_EDUCATION_ERRORS:
          return [];
      default:
         return state;
  }
};

export default educationErrorsReducer;