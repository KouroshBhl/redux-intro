import CreateCustomer from './feautures/users/CreateCustomer';
import Customer from './feautures/users/Customer';
import AccountOperations from './feautures/accounts/AccountOperations';
import BalanceDisplay from './feautures/accounts/BalanceDisplay';
import { useSelector } from 'react-redux';

function App() {
  const { fullName } = useSelector((store) => store.user);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
