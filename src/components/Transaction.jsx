
function Transaction({ transactions, deleteTransaction }) {
    return (
        <section className="transactions">
        <div className="section-heading">
            <div>
                <p className="eyebrow">Geçmiş</p>
                <h2>Son işlemler</h2>
            </div>
            <span className="transaction-count">{transactions.length} kayıt</span>
        </div>  
        <div className="transaction-list">
        {transactions.map((transaction) => (
            <article className={`transaction-item ${transaction.type === 'Gelir' ? 'income-item' : 'expense-item'}`} key={transaction.id}>
                <div className="transaction-icon">{transaction.type === 'Gelir' ? '+' : '−'}</div>
                <div className="transaction-info">
                    <h3>{transaction.title}</h3>
                    <p>{transaction.type} · {transaction.date}</p>
                </div>
                <strong>{transaction.type === 'Gelir' ? '+' : '−'}{transaction.amount.toLocaleString("tr-TR")} TL</strong>
                <button aria-label={`${transaction.title} işlemini sil`} onClick={()=> deleteTransaction(transaction.id)}>×</button>
            </article>
        ))}
        {transactions.length === 0 && <p className="empty-state">Henüz eklenmiş bir işlem yok.</p>}
        </div>
        </section>
    )

}

export default Transaction;
