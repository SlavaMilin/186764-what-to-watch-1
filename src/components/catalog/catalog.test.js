import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from "./catalog";

it(`render catalog`, () => {
  const tree = renderer.create(<Catalog movies={[`first`]} genres={[`first`]} goToMovie={() => {}}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
