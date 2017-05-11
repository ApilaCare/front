import Inferno from 'inferno'
import IconTwitter from '../icons/IconTwitter'
import IconFacebook from '../icons/IconFacebook'
import IconSlack from '../icons/IconSlack'
import IconContributors from '../icons/IconContributors'
import LogoDO from '../logos/LogoDO'
import LogoSauceLabs from '../logos/LogoSauceLabs'
import LogoBrowserstack from '../logos/LogoBrowserstack'
import LogoTheGrid from '../logos/LogoTheGrid'

const GACode = () => {
    return {
        __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-89701958-1', 'auto');
            ga('send', 'pageview');`
    }
};

export default function Footer() {
    return (
    <footer>
        <div className="foot container">
            <div className="row">
                <div className="social-network">
                    <a target="_blank" rel="noopener" href="https://twitter.com/ApilaCare"><IconTwitter/></a>
                    <a target="_blank" rel="noopener" href="https://facebook.com/ApilaCare"><IconFacebook/></a>
                </div>
                <div className="mit">
                    <a target="_blank" rel="noopener" href="https://opensource.org/licenses/MIT">Project licensed under MIT.</a>
                    <div className="built">
                        Website built with Inferno { Inferno.version } using <a target="_blank" rel="noopener" href="https://github.com/infernojs/create-inferno-app">create-inferno-app</a>
                    </div>
                </div>
                <div className="contributors">
                <a target="_blank" rel="noopener" href="https://github.com/infernojs/inferno/graphs/contributors" className="contributors">
                    <IconContributors/> Contributors
                </a>
            </div>
        </div>
        </div>
        <script dangerouslySetInnerHTML={ GACode() } defer />
    </footer>
    )
}
