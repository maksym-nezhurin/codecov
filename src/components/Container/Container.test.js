import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from './Container';

test('Container', () => {
    const component = renderer.create(
        <Container>
            <div>I am in the Container</div>
        </Container>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});