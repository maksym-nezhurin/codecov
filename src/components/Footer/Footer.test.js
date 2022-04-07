import React from 'react';
import renderer from 'react-test-renderer';
import {Footer} from './Footer';
import Link from "../Link/Link";

const LIST_OF_LINKS = [
    { to: 'google.com', text: 'Google'},
    { to: 'facebook.com', text: 'Facebook'},
    { to: '/news', text: 'Our news'},
];

test('Footer structure', () => {
    const component = renderer.create(
        <Footer><ul>
            {LIST_OF_LINKS.map(({ text, to}, index) => <Link key={index} page={to} classNames="App-link" children={text} />)}
        </ul></Footer>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});