import React from 'react'

const styles = {
    ctaWrapper: {
        width: '100%',
        height: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(270deg, #FEE140 0%, #FA709A 100%)'
    },
    text: {
        color: 'white',
        fontFamily: 'Rubik',
        fontWeight: 600,
        fontSize: '3em'
    }
}
const DateCallToAction = () => {
    return (
        <div style={styles.ctaWrapper}>
            <div style={styles.text}>30 ноября 2018</div>
        </div>
    )
}

export default DateCallToAction;
