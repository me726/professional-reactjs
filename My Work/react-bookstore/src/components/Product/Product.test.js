import { render, screen } from '@testing-library/react';
import Product from './Product.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<Product />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('UnknownAuthor: UnknownPrice: $UnknownLanguage: UnknownPublished: UnknownPages: UnknownCountry: UnknownURL: LinkUnknown');
})
