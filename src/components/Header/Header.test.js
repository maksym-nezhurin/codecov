import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './Header';

test('Header structure', () => {
    const component = renderer.create(
        <Header />,
    );

    expect(component.toTree().nodeType).toEqual('component')
});