import { ADD_HISTORY_LOG, DELETE_HISTORY_LOG } from "../actions/actions";

const historyLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_HISTORY_LOG:
      const historyLog = {
        description: action.description,
        historyAt: action.historyAt
      };
      return [historyLog, ...state];
    case DELETE_HISTORY_LOG:
      return [];
    default:
      return state;
  }
};

export default historyLogs;
