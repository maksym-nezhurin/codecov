import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Link page="http://www.google.com">Google</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Should generate link with # if the property page is not passed', () => {
    const component = renderer.create(
        <Link>Form</Link>,
    );
    let tree = component.toJSON();

    expect(tree.props.href).toEqual('#')
});