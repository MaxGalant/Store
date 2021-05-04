import { fetchGoods } from "../ActionCreators/goodsAction";
import { getGoods } from "../Api/goodsRequest";

export const fetchGoodsData = (sortType) => (dispatch) => {
  getGoods(sortType).then((response) => {
    dispatch(fetchGoods(response.data))
  });
};

