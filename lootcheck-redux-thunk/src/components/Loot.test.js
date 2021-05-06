import { mount, shallow } from 'enzyme';
import { Loot } from './Loot.js';

describe('Loot', () => {
  const mockFetch = jest.fn();
  let props = {
    balance: 10,
    bitcoin: { bpi: { USD: { rate: '1,000' } } },
    fetchBitcoin: mockFetch,
  };
  let app = shallow(<Loot {...props} />);

  it('Renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('When mounted', () => {
    beforeEach(() => {
      app = mount(<Loot {...props} />);
    });

    // it('Calls fetchBitcoin() method on mount', () => {
    //   expect(mockFetch).toHaveBeenCalled();
    // });

    it('Convert USD to bitcoin', () => {
      expect(app.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});
