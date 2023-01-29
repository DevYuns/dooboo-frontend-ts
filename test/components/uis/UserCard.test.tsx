import * as renderer from 'react-test-renderer';

import {expect, it, test} from 'vitest';

import React from 'react';
import UserCard from '../../../src/components/uis/UserCard';
import {createTestElement} from '../../utils/testUtils';

const props = {};
const component = createTestElement(<UserCard {...props} />);

test('[Temp] render', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();

    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
