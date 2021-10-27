import s from "./TransactionHistory.module.css";
import PropTypes from 'prop-types'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.number,
    })
}


// PropTypes.shape({
//     optionalProperty: PropTypes.string,
//     requiredProperty: PropTypes.number.isRequired
//   }),
export default TransactionHistory;
