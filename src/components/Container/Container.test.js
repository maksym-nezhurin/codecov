import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from './Container';

test('Container', () => {
    const component = renderer.create(
        <Container>Hello world</Container>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});