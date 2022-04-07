import React from 'react';
import renderer from 'react-test-renderer';
import {Main} from './Main';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Main><div>Test text</div></Main>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});