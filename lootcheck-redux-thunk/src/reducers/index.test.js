import rootReducer from './index';

describe('Root Reducer', () => {
  it('initializes reducers with default state', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
