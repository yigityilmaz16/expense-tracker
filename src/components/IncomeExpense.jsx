function IncomeExpense({ transactions }) {
    const income = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Gelir' ? acc + transaction.amount : acc;
    }, 0);

    const expense = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Gider' ? acc + transaction.amount : acc;
    }, 0);

    return (
        <div className="summary-cards">
            <div className="summary-card income">
                <p>Toplam gelir</p>
                <h3>+{income.toLocaleString("tr-TR")} <span>TL</span></h3>
            </div>
            <div className="summary-card expense">
                <p>Toplam gider</p>
                <h3>-{expense.toLocaleString("tr-TR")} <span>TL</span></h3>
            </div>
        </div>
    );
}

export default IncomeExpense;
