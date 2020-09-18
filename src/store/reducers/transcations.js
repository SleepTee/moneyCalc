const initialState = {
  transactions: [],
  balance: {
    income: 0,
    expense: 0,
    total: 0,
  },
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      const trans = { ...state };
      const transaction = {
        id: "cms" + (+new Date()).toString(16) + "key",
        description: action.description,
        amount: action.amount,
        add: action.add,
      };
      trans.transactions.push(transaction);
      const getIncome = () =>
        trans.transactions.reduce(
          (acc, item) => (item.add ? Number.parseInt(item.amount) + acc : acc),
          0
        );
      const getExpenses = () =>
        trans.transactions.reduce(
          (acc, item) => (!item.add ? Number.parseInt(item.amount) + acc : acc),
          0
        );
      const getTotalBalance = () => {
        const resultIncome = getIncome();
        const resultExpenses = getExpenses();

        const totalBalance = resultIncome - resultExpenses;

        return {
          resultIncome,
          resultExpenses,
          totalBalance,
        };
      };
      const total = getTotalBalance();
      const income = total.resultIncome;
      const expense = total.resultExpenses;
      const totalBalance = total.totalBalance;

      trans.balance.expense = expense;
      trans.balance.income = income;
      trans.balance.total = totalBalance;

      return trans;

    case "DELETE_TRANSACTION":
      const tt = state.transactions.find((x) => x.id === action.index);
      const delIncome = tt.add
        ? state.balance.income - Number.parseInt(tt.amount)
        : state.balance.income;
      const delExpanse = !tt.add
        ? state.balance.expense - Number.parseInt(tt.amount)
        : state.balance.expense;

      return {
        transactions: state.transactions.filter((x) => x.id !== action.index),
        balance: {
          income: delIncome,
          expense: delExpanse,
          total: delIncome - delExpanse,
        },
      };
    default:
      return state;
  }
};

export default transactions;
