import _ from "lodash";
import ActionTypes from "../constants/actionTypes";
import initialState from "../redux/initialState";

export default (state = initialState.homepage, action) => {
  switch (action.type) {
    case ActionTypes.MODAL_AUTH:
      return {
        ...state,
        homepage: action.payload
      };

    default:
      return state;
  }
};
