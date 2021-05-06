import React from 'React';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('Render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('Start with no gifts', () => {
    expect(app.find('.gift-list').children().length).toEqual(0);
  });

  describe('When clicking', () => {
    it('Add new gift when clicking the button', () => {
      app.find('.btn-add').simulate('click');
      expect(app.find('span').at(0).text()).toEqual('(1)');
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('Renders Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    it('Removes a Gift component', () => {
      app.find('.btn-rem').simulate('click');
      expect(app.find('.gift-list').children().length).toEqual(0);
    });
  });
});
