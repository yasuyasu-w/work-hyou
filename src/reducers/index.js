import { combineReducer } from "redux";
import workmng from "./workmng";
import historyLogs from "./historyLogs";

//export default combineReducers({ todos,historyLogs })
export default combineReducer({ workmng, historyLogs });
