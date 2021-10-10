import { combineReducers } from "redux";
import postReducer from "./posts_reducer";
import profileReducer from "../reducers/profiles_reduce";
import usersReducer from "./users_reducer";
import educationReducer from "./education_reducer";
import experienceReducer from "./experience_reducer";
import commentReducer from "./comment_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    profiles: profileReducer,
    educations: educationReducer, 
    experiences: experienceReducer,
    comments: commentReducer
});

export default entitiesReducer;