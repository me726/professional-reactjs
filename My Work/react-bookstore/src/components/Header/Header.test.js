import Header from './Header.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<Header />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('Welcome to the React Bookstore');
})
