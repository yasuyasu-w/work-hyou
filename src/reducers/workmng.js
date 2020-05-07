import { JOIN_NAME, DELETE_NAME, CHANGE_FINE } from "../actions/actions";
const workmng = (state = [], action) => {
  switch (action.type) {
    case JOIN_NAME:
      const namest = { name: action.name, fine: false };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...namest }];

    case DELETE_NAME:
      const DL = state.filter(
        sbname => sbname.id !== action.id && sbname.fine !== action.fine
      );
      const RN = DL.map((dl, index) => {
        return { ...dl, id: index + 1 };
      });
      return [...RN];

    case CHANGE_FINE:
      return state.map(t => {
        return { ...t, fine: action.fine };
      });

    default:
      return state;
  }
};

export default workmng;
