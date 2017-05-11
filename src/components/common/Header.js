import { Link, Router } from 'inferno-router'

import Component from 'inferno-component'
import IconMenu from '../icons/IconMenu'
import Inferno from 'inferno'
import InfernoLogo from '../icons/IconInferno'
import ApilaLogo from '../icons/IconApila'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    componentDidMount() {
        const main = document.querySelector('main')
        main.addEventListener('click', this.closeSidebar)
    }

    componentWillUnmount() {
        const main = document.querySelector('main')
        main.removeEventListener('click', this.closeSidebar)
    }

    closeSidebar = (e) => {
        this.setState({ active: false });
    }

    toggleSidebar = (e) => {
        this.setState({ active: !this.state.active });
    }

    render() {
        const MenuLink = (props, { router }) => {
            // Hacky solution to highlight the correct menu item
            let classNames = props.className ? props.className.split(' ') : []
            if (router.url
            && (router.url === props.to
            || (router.url.includes('/docs/') && props.to.includes('/docs/'))
            )) {
                classNames.push('selected')
            }
            if (classNames.indexOf('branding') !== -1 && router.url != '/') {
                classNames.push('show');
            }
            return <Link to={props.to} className={classNames.join(' ')} onClick={ this.closeSidebar }>
                {props.children}
            </Link>
        }

        return (
        <div className="menu">
            <div className="container">
            <div className="row">
                <div className="menu-toggle" onClick={ this.toggleSidebar }>
                    <IconMenu/>
                </div>
                <MenuLink to="/" className="branding lg3 sm3"><ApilaLogo/> Apila</MenuLink>
                <nav className={ 'lg9 sm9 ' + (this.state.active ? 'open' : 'closed') }>
                    <MenuLink to="/front">Home</MenuLink>
                    <MenuLink to="/about">About</MenuLink>
                    <MenuLink to="/Pricing">Pricing</MenuLink>
                    <MenuLink to="/docs/guides/installation">Docs</MenuLink>
                    <a target="_blank" rel="noopener" href="https://github.com/infernojs/inferno/issues" onClick={ this.closeSidebar }>Contribute</a>
                    <a target="_blank" rel="noopener" href="https://medium.com/inferno-js" onClick={ this.closeSidebar }>Blog</a>
                    <a target="_blank" rel="noopener" href="https://github.com/infernojs" onClick={ this.closeSidebar }>Github</a>
                </nav>
            </div></div>
        </div>
        )
    }
}
