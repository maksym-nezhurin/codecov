import './App.css';
import Link from "./components/Link/Link";
import {Container} from "./components/Container/Container";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";

const FOOTER_LINKS_DATA = [
    {
        href: '/about',
        text: 'About'
    },
    {
        href: '/news',
        text: 'Our news'
    },
    {
        href: '/contact-us',
        text: 'Contact US'
    }
];

function App() {
    const footerLinks = FOOTER_LINKS_DATA.map(({ href, text}) => {
        return <li className={"footer-menu__link"}><Link page={href} classNames="App-link" children={text} /></li>
    })

  return (
    <div className="App">
        <Container>
            <Header classNames={"App-header"}>
                <h2>Hello header</h2>
            </Header>

            <Main classNames={"main-content"}>
                <div>Hello world</div>
                <Link page="https://reactjs.org" classNames="App-link" children="New React Link"/>
            </Main>

            <Footer>
                <ul className={"footer-menu"}>{ footerLinks }</ul>
            </Footer>
        </Container>
    </div>
  );
}

export default App;
