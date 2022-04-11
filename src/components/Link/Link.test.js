import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

test('Should generate link with # if the property page is not passed', () => {
    const component = renderer.create(
        <Link>Form</Link>,
    );
    let tree = component.toJSON();

    expect(tree.props.href).toEqual('#')
});