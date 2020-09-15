export const addTransaction = (add, description, amount) => ({
  type: "ADD_TRANSACTION",
  add: add,
  description: description,
  amount: amount,
});

export const deleteTransaction = (index) => ({
  type: "DELETE_TRANSACTION",
  index: index,
});

export const readTotalBalance = (total) => ({
  type: "OPEN_TOTAL",
  total: total,
});
