function Balance({ transactions }) {
    const totalBalance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Gelir' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);

    return (
        <div className="balance-card">
            <p className="card-label">Mevcut bakiye</p>
            <h2>{totalBalance.toLocaleString("tr-TR")} <span>TL</span></h2>
        </div>
    );
}

export default Balance;
