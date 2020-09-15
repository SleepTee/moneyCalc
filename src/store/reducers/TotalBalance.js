const initialState = 0;

const totalBalance = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_TOTAL":
      const balance = [...state];
      balance = +action.total;
      return balance;
    default:
      return state;
  }
};

export default totalBalance;
