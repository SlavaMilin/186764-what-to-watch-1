import React from 'react';
import renderer from 'react-test-renderer';
import Footer from "./footer";

it(`render footer`, () => {
  const root = renderer.create(<Footer/>).toJSON();
  expect(root).toMatchSnapshot();
});
