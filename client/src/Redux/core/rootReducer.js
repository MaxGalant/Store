import { combineReducers } from "redux";
import { goodsReducer } from "../Reducers/goodsReducer";

export const rootReducer = combineReducers({

    goods:goodsReducer
});
