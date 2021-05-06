import { FETCH_BITCOIN } from '../constants';

export const fetchBitcoin = () => (dispatch) => {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((res) => res.json())
    .then((res) => dispatch({ type: FETCH_BITCOIN, bitcoin: res }));
};
