import { combineReducers } from "redux";
import postReducer from "./posts_reducer";

import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer
});

export default entitiesReducer;