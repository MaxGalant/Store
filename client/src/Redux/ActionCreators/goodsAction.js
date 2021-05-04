import { FETCH_GOODS } from "../ActionTypes/goodsType";

export const fetchGoods = (data) => {
    return { type: FETCH_GOODS, payload: data };
};