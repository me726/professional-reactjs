import {App} from './App.js';
import ShallowMock from './ShallowMock.js';
import { Provider } from 'react-redux';
import {shallow} from 'enzyme';

let component;
let store = {"products":[], "cart":[]};

beforeEach(() => {
  component = shallow(ShallowMock(<App />, store));
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('<Header /><Main /><Footer />');
})
