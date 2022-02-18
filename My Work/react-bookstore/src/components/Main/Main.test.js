import Main from './Main';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<Main />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('<Routes />');
})