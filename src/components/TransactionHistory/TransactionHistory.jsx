import s from "./TransactionHistory.module.css";
import PropTypes from 'prop-types'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={s.tr} key={item.id}>
              <td className={s.td}>{item.type}</td>
              <td className={s.td}>{item.amount}</td>
              <td className={s.td}>{item.currency}</td>
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
