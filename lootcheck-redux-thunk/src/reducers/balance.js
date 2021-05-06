import * as constants from '../constants';

export default function balance(state = 0, action) {
  switch (action.type) {
    case constants.SET_BALANCE:
      return action.balance;
    case constants.DEPOSIT:
      return state + Number(action.deposit);
    case constants.WITHDRAW:
      return state - Number(action.withdraw);
    default:
      return state;
  }
}
