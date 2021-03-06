import * as constants from '../constants';
import * as actions from './balance';

it('creates an action to set a balance', () => {
  const balance = 0;
  const expAction = { type: constants.SET_BALANCE, balance };
  expect(actions.setBalance(balance)).toEqual(expAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 10;
  const expAction = { type: constants.DEPOSIT, deposit };
  expect(actions.deposit(deposit)).toEqual(expAction);
});

it('creates an action to withdraw from the balance', () => {
  const withdraw = 10;
  const expAction = { type: constants.WITHDRAW, withdraw };
  expect(actions.withdraw(withdraw)).toEqual(expAction);
});
