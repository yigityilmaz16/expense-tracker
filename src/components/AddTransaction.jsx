import { useState } from "react";
function AddTransaction({addTransaction}){

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Gelir');

    function handleSubmit(e){
        e.preventDefault();
       if (!title.trim() || Number(amount) <= 0){
            alert("Lütfen Tutar ve Başlık Bölümlerini Doldurunuz");
            return;
        }
        const newTransaction = {
            title,
            amount: Number(amount),
            type,
            id: Date.now(),
            date: new Date().toLocaleDateString("tr-TR")
        };
       addTransaction(newTransaction);

       setTitle("");
       setAmount("");
       setType('Gelir');
    }
    return(
        <section className="add-transaction">
        <div className="section-heading">
            <div>
                <p className="eyebrow">Yeni kayıt</p>
                <h2>İşlem ekle</h2>
            </div>
        </div>
        <form className="transaction-form" onSubmit={handleSubmit}>
        <input type="text" aria-label="İşlem adı" placeholder="İşlem adı" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" aria-label="Miktar" placeholder="Miktar" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <select aria-label="İşlem türü" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Gelir">Gelir</option>
            <option value="Gider">Gider</option>
        </select>
        <button type="submit">İşlemi ekle</button>
        </form>
        </section>
    )
}

export default AddTransaction;
