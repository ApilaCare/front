import Inferno from 'inferno'
import { IndexRoute, Route } from 'inferno-router'
import Layout from './components/layout/Layout'
import NotFound from './components/layout/404'
import Home from './pages/Home'
import Docs from './pages/Docs'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contribute from './pages/Contribute'

function Wrap(props) {
    return props.children;
}

/**
 * Routes are defined here.
 */
//<Route path="/demo" component={ DemoInferno }/>
export default (
    <Route component={ Layout }>
        <IndexRoute component={ Home }/>
        <Route path="/docs/:path*" component={ Docs }/>
        <Route path="/docs" component={ Docs }/>
        <Route path="/about" component={ About }/>
        <Route path="/contribute" component={ Contribute }/>
        <Route path="/pricing" component={ Pricing }/>
        <Route path="*" component={ NotFound }/>
    </Route>

)
