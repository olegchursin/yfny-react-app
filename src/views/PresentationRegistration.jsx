import React, {Component} from 'react'
import InnerPageHero from '../components/InnerPageHero';

const styles = {
    form: {
        padding: '100px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export class PresentationRegistration extends Component {
    scrollToTop = () => {
        window.scroll({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <div>
                <InnerPageHero title={'Проекты'}/>
                <div style={styles.form}>
                    <iframe
                        title='PresentationRegistration'
                        onLoad={this.scrollToTop}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdi8yawTjAA6Hhv7cCIHSkXu5_XnMSVRDGYx_utLrWeh9Ro0Q/viewform?embedded=true"
                        width="640"
                        height="1738"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0">Loading...</iframe>
                </div>
            </div>
        )
    }
}

export default PresentationRegistration
