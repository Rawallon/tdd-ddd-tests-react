import React from 'react';
import Loot from './Loot';
import Wallet from './Wallet';

export default function App() {
  return (
    <div>
      <h2>Loot Check</h2>
      <Wallet />
      <Loot />
    </div>
  );
}
