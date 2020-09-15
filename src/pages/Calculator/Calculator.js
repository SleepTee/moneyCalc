import React from "react";
import Total from "../../components/Total/Total";
import History from "../../components/History/History";
import Operation from "../../components/Operation/Operation";
import { connect } from "react-redux";
import {
  addTransaction,
  deleteTransaction,
  readTotalBalance,
} from "../../store/actions/index";

class Calculator extends React.Component {
  state = {
    description: "",
    amount: "",
  };

  addTransaction = (add) => {
    this.props.addTransaction(add, this.state.description, this.state.amount);
    this.setState({ description: "", amount: "" });
  };

  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  addAmount = (e) => {
    this.setState({ amount: e.target.value });
  };
  getIncome = () =>
    this.props.transactions.reduce(
      (acc, item) => (item.add ? Number.parseInt(item.amount) + acc : acc),
      0
    );
  getExpenses = () =>
    this.props.transactions.reduce(
      (acc, item) => (!item.add ? Number.parseInt(item.amount) + acc : acc),
      0
    );

  getTotalBalance = () => {
    const resultIncome = this.getIncome();
    const resultExpenses = this.getExpenses();

    const totalBalance = resultIncome - resultExpenses;

    return {
      resultExpenses,
      resultIncome,
      totalBalance,
    };
  };

  render() {
    const total = this.getTotalBalance();

    return (
      <React.Fragment>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total
              totalBalance={total.totalBalance}
              resultIncome={total.resultIncome}
              resultExpenses={total.resultExpenses}
            />
            <History
              transactions={this.props.transactions}
              deleteTransaction={this.props.deleteTransaction}
            />
            <Operation
              addDescription={this.addDescription}
              addAmount={this.addAmount}
              addTransaction={this.addTransaction}
              description={this.state.description}
              amount={this.state.amount}
              getTotalBalance={this.getTotalBalance}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = {
  addTransaction,
  deleteTransaction,
  readTotalBalance,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);