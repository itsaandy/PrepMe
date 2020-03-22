import React from 'react';
import { render } from 'react-native-testing-library';
import HomeScreenContainer from '.';

describe('home screen tests', () => {
  it('should display text', () => {
    const { getByText } = render(<HomeScreenContainer />);
    getByText('Goodbye');
  });
});
