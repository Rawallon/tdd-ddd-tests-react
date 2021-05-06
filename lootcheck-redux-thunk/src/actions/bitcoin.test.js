// https://api.coindesk.com/v1/bpi/currentprice.json
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from '../constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: 'bpi' } };

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',
  mockResponse,
);

it('astync fetch', () => {
  const expAction = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expAction);
  });
});
