import { combineReducers } from "redux";
import { achievementsReducer, eduDetailReducer, experReducer, personalDetailReducer, skillReducer } from "./reducers/personalDetailsReducers";

export const rootReducer = combineReducers({
    personalState: personalDetailReducer,
    eduState: eduDetailReducer,
    skillState: skillReducer,
    expertState: experReducer,
    achievementState: achievementsReducer
});