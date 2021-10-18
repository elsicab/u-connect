import { RECEIVE_PROFILE_ERRORS, CLEAR_PROFILE_ERRORS} from '../actions/profile_actions'

const profileErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PROFILE_ERRORS:
          return action.errors;
      case CLEAR_PROFILE_ERRORS:
          return [];
      default:
         return state;
  }
};

export default profileErrorsReducer;