import css from './TransactionHistory.module.css';

export default function TransactionHistory({items}){
    return (
        <table className={css.table}>
        <thead>
          <tr className={css.firstRow}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
            {items.map((el, index) => (
                <tr key={el.id} className={index % 2 === 0 ? css.oddRow : css.evenRow}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
}