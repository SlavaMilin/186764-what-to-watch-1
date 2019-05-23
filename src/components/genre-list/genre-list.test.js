import React from 'react';
import renderer from 'react-test-renderer';
import GenreList from "./genre-list";

it(`render genre list`, () => {
  const tree = renderer.create(<GenreList genres={[`first`, `second`]}/>);
  expect(tree).toMatchSnapshot();
});
