import React, { useState } from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
export default function Gift({ children }) {
  const [state, setState] = useState({ person: '', gift: '' });

  return (
    <div className="gift">
      <Form>
        <FormGroup>
          <FormLabel>Person:</FormLabel>
          <FormControl
            value={state.person}
            className="input-person"
            onChange={(e) => setState({ ...state, person: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Gift:</FormLabel>
          <FormControl
            value={state.gift}
            className="input-gift"
            onChange={(e) => setState({ ...state, gift: e.target.value })}
          />
        </FormGroup>
        <FormGroup>{children}</FormGroup>
      </Form>
    </div>
  );
}
