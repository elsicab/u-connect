import { combineReducers } from "redux";
import postReducer from "./posts_reducer";
import profileReducer from "../reducers/profiles_reduce";
import usersReducer from "./users_reducer";
import educationReducer from "./education_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    profile: profileReducer,
    education: educationReducer
});

export default entitiesReducer;