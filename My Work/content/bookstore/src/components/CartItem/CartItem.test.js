import CartItem from './CartItem.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<CartItem title="test book" author="person" price="6"/>);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('test book by person $6');
})
