import React from 'react';
import Total from "./components/Total/Total";
import History from "./components/History/History";
import Operation from "./components/Operation/Operation";


class App extends React.Component {

    state = {
     transactions: [],
     description: "",
     amount: ""
    };
 
    addTransaction = add =>  {
        const transactions = [...this.state.transactions];

        const transaction = {
            id: "cms" + (+new Date).toString(16) + "key",
            description: this.state.description,
            amount: this.state.amount,
            add
        };

        transactions.push(transaction);

        this.setState( {transactions , description: "" , amount: ""});
        console.log(this.state)
    };

    addDescription = e => {
        this.setState({description: e.target.value});
    };
    addAmount = e => {
        this.setState({amount:e.target.value});
    };
    getIncome = () => this.state.transactions.reduce((acc,item) =>item.add ? Number.parseInt(item.amount) + acc: acc, 0);
    getExpenses = () => this.state.transactions.reduce((acc,item) =>!item.add ? Number.parseInt(item.amount) + acc: acc, 0);

    getTotalBalance = () => {
        const resultIncome = this.getIncome();
        const resultExpenses = this.getExpenses();

        const totalBalance = resultIncome - resultExpenses;

        return {
            resultExpenses,
            resultIncome,
            totalBalance
        }
    }


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
                            totalBalance = {total.totalBalance}
                            resultIncome = {total.resultIncome}
                            resultExpenses = {total.resultExpenses}
                        />
                        <History
                            transactions={this.state.transactions}
                        />
                        <Operation
                            addDescription={this.addDescription}
                            addAmount={this.addAmount}
                            addTransaction={this.addTransaction}
                            description={this.state.description}
                            amount={this.state.amount}
                            getTotalBalance={this.getTotalBalance}
                            test={13}
                        />
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;


