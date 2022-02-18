import { render, screen } from '@testing-library/react';
import Footer from './Footer.js';
import {shallow} from 'enzyme';

let component;

beforeEach(() => {
  component = shallow(<Footer />);
});

it('randers without crashing', () => {
  expect(component.text()).toEqual('This is the footer.');
})
