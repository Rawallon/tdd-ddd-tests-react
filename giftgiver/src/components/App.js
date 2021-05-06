import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';

export default function App() {
  const [state, setstate] = useState([]);
  const addGift = () => {
    setstate((prev) => [...prev, { id: state.length + 1 }]);
  };
  const removeGift = (propId) => {
    setstate(state.filter((gift) => gift.id !== propId));
  };
  return (
    <div>
      <h2>
        Gift Giver <span>({state.length})</span>
      </h2>
      <div className="gift-list">
        {state.map((item) => (
          <Gift key={item.id}>
            <Button className="btn-rem" onClick={() => removeGift(item.id)}>
              Remove Gift
            </Button>
          </Gift>
        ))}
      </div>
      <Button className="btn-add" onClick={addGift}>
        Add gift
      </Button>
    </div>
  );
}
