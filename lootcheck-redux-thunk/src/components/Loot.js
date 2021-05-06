import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export const Loot = ({ fetchBitcoin, balance, bitcoin }) => {
  const [bitcoinBalance, setBitcoinBalance] = useState(0);
  useEffect(() => {
    if (!bitcoin.bpi?.USD?.rate) {
      fetchBitcoin();
    }
  }, []);

  useEffect(() => {
    if (bitcoin.bpi?.USD?.rate)
      setBitcoinBalance(
        balance / Number(bitcoin.bpi.USD.rate.replace(',', '')),
      );
  }, [balance, bitcoin]);

  return <h3>Bitcoin balance: {bitcoinBalance}</h3>;
};

const mapStateToProps = (state) => ({
  balance: state.balance,
  bitcoin: state.bitcoin,
});

const mapDispatchToProps = {
  fetchBitcoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
