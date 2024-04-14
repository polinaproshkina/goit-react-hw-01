import css from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
            <thead className={css.tableHeader}>
                <tr>
                    <th className={css.tableHeaderEl}>Type</th>
                    <th className={css.tableHeaderEl}>Amount</th>
                    <th className={css.tableHeaderEl}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item =>
                    <tr key={item.id} className={css.tableLine}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr> )}               
            </tbody>
        </table>

    )
}