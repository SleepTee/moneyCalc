import { combineReducers } from "redux";
import transactions from "./transcations";
import totalBalance from "./TotalBalance";

export default combineReducers({
  transactions,
  totalBalance,
});
