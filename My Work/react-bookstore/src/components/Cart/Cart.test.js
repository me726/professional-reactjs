import Cart from './Cart.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<Cart />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('CartTotal: $0Checkout');
})
