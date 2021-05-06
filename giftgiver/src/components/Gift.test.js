import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

  it('It renders properly', () => {
    expect(gift).not.toBeNull();
  });

  it('When typing into a person field', () => {
    const name = 'Bob';
    gift.find('.input-person').simulate('change', { target: { value: name } });
    expect(gift.find('.input-person').prop('value')).toBe(name);
  });

  it('When typing into a gift field', () => {
    const name = 'React course';
    gift.find('.input-gift').simulate('change', { target: { value: name } });
    expect(gift.find('.input-gift').prop('value')).toBe(name);
  });

  it('When passing children into component', () => {
    const children = <button id="test">Test</button>;
    const giftChildren = shallow(<Gift children={children} />);
    expect(giftChildren.find('#test')).toBeTruthy();
  });
});
