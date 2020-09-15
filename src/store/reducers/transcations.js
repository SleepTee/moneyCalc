const initialState = [];
const transactions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const trans = [...state];
      const transaction = {
        id: "cms" + (+new Date()).toString(16) + "key",
        description: action.description,
        amount: action.amount,
        add: action.add,
      };
      trans.push(transaction);
      return trans;

    case "DELETE_TRANSACTION":
      const del = [...state];
      del.splice(action.index, 1);
      return del;
    default:
      return state;
  }
};

export default transactions;
