import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockWithdraw = jest.fn();
  const mockDeposit = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it('Renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('display balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input with value to deposit or withdraw', () => {
    expect(wallet.find('.input-wallet').exists()).toBeTruthy();
  });

  it('changes the value of input', () => {
    const newBalance = 20;
    expect(wallet.find('.input-wallet').prop('value')).toEqual(0);
    wallet
      .find('.input-wallet')
      .simulate('change', { target: { value: newBalance } });
    expect(wallet.find('.input-wallet').prop('value')).toEqual(newBalance);
  });

  describe('Buttons', () => {
    const inputValue = 10;
    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: inputValue } });
    });

    it('Clicks deposit button', () => {
      wallet.find('.btn-deposit').simulate('click');
      expect(mockDeposit).toHaveBeenCalledWith(inputValue);
    });

    it('Clicks withdraw button', () => {
      wallet.find('.btn-withdraw').simulate('click');
      expect(mockWithdraw).toHaveBeenCalledWith(inputValue);
    });
  });
});
