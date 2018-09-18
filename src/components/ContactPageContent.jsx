import React from 'react';

const styles = {
    contactPageContentWrapper: {
        padding: '100px 40px',
        fontFamily: 'Rubik',
        textAlign: 'center'
    }
}
const ContactPageContent = () => {
    return (
        <div style={styles.contactPageContentWrapper}>
            <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
            <p>По всем интересующим вопросам Вы можете связаться с организатором форума -
                Русским центром в Нью-Йорке.</p>
            <h3>E-mail:&#160;
                <a
                    href="mailto:hello@russiancenterny.org? Subject=Message%20from%20official%20website.s"
                    target="_top">hello@russiancenterny.org</a>
            </h3>
        </div>
    )
}

export default ContactPageContent;