import React from "react";

const Operation = ({addDescription , addAmount , addTransaction , description , amount}) => (
    <section className="operation">
        <h3>Новая операция</h3>
        <form id="form">
            <label>
                <input
                    type="text"
                    className="operation__fields operation__name"
                    placeholder="Наименование операции"
                    onChange={addDescription}
                    value={description}
                />
            </label>
            <label>
                <input type="number"
                       className="operation__fields operation__amount"
                       placeholder="Введите сумму"
                       onChange={addAmount}
                       value={amount}
                />
            </label>
            <div className="operation__btns">
                <button
                    type="button"
                    className="operation__btn operation__btn-subtract"
                    onClick={() =>addTransaction(false)}
                >РАСХОД</button>
                <button
                    type="button"
                    className="operation__btn operation__btn-add"
                    onClick={() =>addTransaction(true)}
                >ДОХОД</button>
            </div>

        </form>
    </section>
);

export default Operation;