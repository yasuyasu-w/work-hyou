import { combineReducers } from "redux";
import workmng from "./workmng";
import historyLogs from "./historyLogs";

//export default combineReducers({ todos,historyLogs })
export default combineReducers({ workmng, historyLogs });
