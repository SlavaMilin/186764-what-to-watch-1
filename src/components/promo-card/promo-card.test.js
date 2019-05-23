import React from 'react';
import renderer from 'react-test-renderer';
import PromoCard from './promo-card';

it(`render promo card`, () => {
  const tree = renderer.create(<PromoCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
