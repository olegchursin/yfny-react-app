import React from 'react'
import {rcny, yfny} from '../utils/info'
import {img} from '../utils/images'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

const styles = {
    footerWrapper: {
        fontFamily: 'Rubik',
        display: 'flex',
        flexDirection: 'column',
        adjustContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '600px',
        background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
        padding: '40px 0 10px'
    },
    importantInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20
    },
    rcnyCopyright: {
        marginTop: 40
    },
    rcnyLogo: {
        marginTop: 10,
        width: 100
    },
    socialMediaIcon: {
        margin: '0 10px'
    },
    socialMediaGroup: {
        margin: '20px 0',
        fontSize: '3em'
    },
    socialMediaLink: {
        color: 'white',
        cursor: 'pointer'
    },
    yfnyLogo: {
        margin: 40,
        width: 250
    },
    webDevSection: {
        marginTop: 40
    },
    webDevLink: {
        color: 'white'
    }
}

export default() => {
    return (
        <div style={styles.footerWrapper}>
            <div>{yfny.socialMedia.hashtag}
                / {yfny.socialMedia.nametag}</div>
            <div>{rcny.email}</div>
            <div style={styles.socialMediaGroup}>
                <a style={styles.socialMediaLink} href={yfny.socialMedia.facebook}><FontAwesomeIcon style={styles.socialMediaIcon} icon={faFacebookSquare}/></a>
                <a style={styles.socialMediaLink} href={yfny.socialMedia.instagram}><FontAwesomeIcon style={styles.socialMediaIcon} icon={faInstagram}/></a>
                <a style={styles.socialMediaLink} href={yfny.socialMedia.twitter}><FontAwesomeIcon style={styles.socialMediaIcon} icon={faTwitterSquare}/></a>
            </div>
            <img
                style={styles.yfnyLogo}
                src={img.yfnyLogoWhite.url}
                alt={img.yfnyLogoWhite.alt}/>
            <div style={styles.importantInfo}>
                <div>BY INVITATION ONLY. SEATING IS LIMITED.</div>
                <div>ADVANCE REGISTRATION REQUIRED.</div>
                <div>REGISTRATIONS ARE SCREENED.</div>
            </div>
            <div style={styles.rcnyCopyright}>
                © {new Date().getFullYear()}
                &#160;{rcny
                    .name
                    .toUpperCase()}
            </div>
            <a href={rcny.website}>
                <img
                    style={styles.rcnyLogo}
                    src={img.rcnyLogoWhite.url}
                    alt={img.rcnyLogoWhite.alt}/>
            </a>
            <div style={styles.webDevSection}>web dev //
                <a
                    style={styles.webDevLink}
                    target='_blank'
                    rel="noopener noreferrer"
                    href="http://olegchursin.com">&#160;oleg chursin</a>
            </div>
        </div>
    )
}