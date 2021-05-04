
import { FETCH_GOODS } from "../ActionTypes/goodsType";
import {  IDLE, SUCCESS } from "../constants/status";

const goodsState = {
  goodsData: {},
  status: IDLE,
};

export const goodsReducer = (state = goodsState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      return {
        ...state,
        status: SUCCESS,
        goodsData:action.payload
      };

    default:
      return state;
  }
};
