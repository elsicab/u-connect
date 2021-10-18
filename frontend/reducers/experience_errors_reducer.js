import { RECEIVE_EXPERIENCE_ERRORS, CLEAR_EXPERIENCE_ERRORS} from '../actions/experience_actions'

const experienceErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_EXPERIENCE_ERRORS:
          return action.errors;
      case CLEAR_EXPERIENCE_ERRORS:
          return [];
      default:
         return state;
  }
};

export default experienceErrorsReducer;