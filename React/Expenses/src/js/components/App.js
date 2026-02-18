import {useState, useEffect} from 'react';

import H1 from './headers/H1';

const START_BALANCE = 1000;

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
    const savedFinances = window.localStorage.getItem("finance");

    let summ = savedFinances ? JSON.parse(savedFinances).reduce(function(accum, item, index){
        return accum += parseFloat(item.amount);
    }, START_BALANCE) : START_BALANCE;

    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(summ);

    const [finances, setFinances] = useState(savedFinances ? JSON.parse(savedFinances) : []);

    function add(event) {
        event.preventDefault();

        const newFinances = [
            ...finances,
            {id: uid(), date: date, description: description, amount: amount}
        ];

        setFinances(newFinances);

        let summ = newFinances.reduce(function(accum, item, index){
            return accum += parseFloat(item.amount);
        }, START_BALANCE);

        setTotal(summ);

        setDate("");
        setDescription("");
        setAmount(0);
    }

    useEffect(() => {
        window.localStorage.setItem("finance", JSON.stringify(finances));
    }, [finances]);
    
    return (
        <>
            <H1>Доходы/расходы</H1>
            <form className="form" onSubmit={add}>
                <div>
                    <input type="date" placeholder="Дата" value={date} onChange={ (e) => setDate(e.target.value) } />
                    <input type="text" placeholder="Описание расхода" value={description} onChange={ (e) => {setDescription(e.target.value)}} />
                    <input type="number" placeholder="Сумма" value={amount} onChange = { (e) => setAmount(e.target.value) } />
                </div>
                <button type="submit">Добавить</button>
            </form>
            <div className="total">Общий баланс: <span>{total}</span> BYN</div>
            {
                finances.length > 0 ? 
                <ul className="list">
                    {
                        finances.map(function(finance){
                            return (
                                    <li className={finance.amount > 0 ? "item positive" : "item negative"} key={finance.id}>
                                        <span>{finance.date}</span>
                                        <span>{finance.description}</span>
                                        <span >{finance.amount} BYN</span>
                                    </li>
                                )
                            }
                        )
                    }
                </ul> : <div className="empty">"Список расходов пока пустой"</div> 
            }
        </>
    );
}