import { render, screen } from '@testing-library/react';
import ProductList from './ProductList.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<ProductList />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('Products');
})
