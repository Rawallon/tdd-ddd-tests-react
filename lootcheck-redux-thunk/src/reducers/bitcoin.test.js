import { FETCH_BITCOIN } from '../constants';
import bitcoinReducer from './bitcoin';

describe('Bitcoin Reducer', () => {
  const bitcoinData = { bpi: 'bpi' };

  it('fetches and sets bitcoin data', () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData }),
    ).toEqual(bitcoinData);
  });
});
