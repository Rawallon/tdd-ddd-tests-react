import React from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export const Wallet = ({ balance, deposit, withdraw }) => {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <h3 className="balance">Wallet balance: {balance}</h3>
      <input
        type="number"
        className="input-wallet"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button className="btn-deposit" onClick={() => deposit(state)}>
        Deposit
      </button>
      <button className="btn-withdraw" onClick={() => withdraw(state)}>
        Withdraw
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  balance: state.balance,
});

const mapDispatchToProps = {
  deposit,
  withdraw,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
