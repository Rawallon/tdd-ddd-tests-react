import balanceReducer from './balance';
import * as constants from '../constants';

describe('Balance Reducer', () => {
  it('Sets a balance', () => {
    const balance = 10;
    expect(
      balanceReducer(undefined, { type: constants.SET_BALANCE, balance }),
    ).toEqual(balance);
  });

  it('deposits into the balance', () => {
    const deposit = 10;
    const initialState = 5;
    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit }),
    ).toEqual(deposit + initialState);
  });
});

it('withdraws from the balance', () => {
  const withdraw = 5;
  const initialState = 15;
  expect(
    balanceReducer(initialState, { type: constants.WITHDRAW, withdraw }),
  ).toEqual(initialState - withdraw);
});
