import Benchmarks from '../components/home/Benchmarks'
import Component from 'inferno-component'
import ContentAccordion from '../components/common/ContentAccordion'
import Editor from '../components/repl/Editor'
import Features from '../components/home/Features'
import IconBenchmark from '../components/icons/IconBenchmark'
import Inferno from 'inferno'
import InfernoLogo from '../components/icons/IconInferno'
import { Link } from 'inferno-router'

const codeSample = `
class MyInfernoTest extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            time: null
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: (new Date()).toLocaleString()
            });
        }, 200);
    }
    render() {
        return <h2>
            Current time: <span>{this.state.time}</span>
        </h2>
    }
}

export default MyInfernoTest;
`

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({ loaded: true })
    }

    render() {
        return <div className="home">
            <div className="hero-banner row">
                <div className="logo xs12 sm3">
                    <InfernoLogo/>
                </div>
                <div className="logo-text sm9">
                    <h1>Apila</h1>
                    <h2>An extremely fast React-like JavaScript library for building modern user interfaces.</h2>
                    <div className="buttons">
                        <a className="button xs8" href="https://apila.care/auth/register" rel="noopener">Try it Out</a>
                    </div>
                </div>
            </div>
            <section className="features">
                <Features/>
            </section>
        </div>
    }
}
