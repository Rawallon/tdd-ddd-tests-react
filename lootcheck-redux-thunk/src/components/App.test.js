import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  it('Renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected Wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBeTruthy();
  });

  it('contains a connected Loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBeTruthy();
  });
});
