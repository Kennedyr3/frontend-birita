/**
 * @format
 */

import 'react-native';
import React from 'react';
import Category from '../src/Components/Category';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Cart from '../src/Screens/Cart';

describe('Category', () => {
  it('renders correctly', () => {
    renderer.create(<Category />);
  });
});

describe('Product', () => {
  it('renders correctly', () => {
    renderer.create(<Cart />);
  });
});
