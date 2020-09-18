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
      const del = { ...state, balance: { ...state.balance } };
      del.transactions.splice(action.index, 1);
      const geIncome = () =>
        del.transactions.reduce(
          (acc, item) => (item.add ? Number.parseInt(item.amount) + acc : acc),
          0
        );
      const geExpenses = () =>
        del.transactions.reduce(
          (acc, item) => (!item.add ? Number.parseInt(item.amount) + acc : acc),
          0
        );
      const eTotalBalance = () => {
        const resultIncome = geIncome();
        const resultExpenses = geExpenses();

        const totalBalance = resultIncome - resultExpenses;

        return {
          resultIncome,
          resultExpenses,
          totalBalance,
        };
      };
      const otal = eTotalBalance();
      const ncome = otal.resultIncome;
      const xpense = otal.resultExpenses;
      const otalBalance = otal.totalBalance;

      del.balance.expense = xpense;
      del.balance.income = ncome;
      del.balance.total = otalBalance;
      return del;
    default:
      return state;
  }
};

export default transactions;
