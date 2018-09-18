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

export class Registration extends Component {
    render() {
        return (
            <div>
                <InnerPageHero title={'Регистрация'}/>
                <div style={styles.form}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScBieN1X779Ry2iNmavPMZaj_G7kTGt8YC5CzbOObFvzdNQEQ/viewform?embedded=true"
                        width="640"
                        height="1700"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0">Loading...</iframe>
                </div>
            </div>
        )
    }
}

export default Registration