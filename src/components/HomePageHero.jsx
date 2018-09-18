import React from 'react'
import {img} from '../utils/images'

const styles = {
    hero: {
        padding: 40,
        height: '60vh',
        background: 'linear-gradient(145deg, #08AEEA 0%, #2AF598 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroImage: {
        width: 300
    }
}

const HomePageHero = () => {
    return (
        <div style={styles.hero}>
            <img style={styles.heroImage} src={img.yfny2018.url} alt={img.yfny2018.alt}/>
        </div>
    )
}

export default HomePageHero;
