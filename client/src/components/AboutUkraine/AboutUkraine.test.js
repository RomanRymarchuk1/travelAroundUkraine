/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import {  render,  } from '@testing-library/react';
import AboutUkraine from './AboutUkraine';

describe('AboutUkraine snapshot testing', () => {
test('should render AboutUkraine Component', () => { 
   const {asFragment} =  render(<AboutUkraine/>);
   expect(asFragment()).toMatchSnapshot();
 })
});