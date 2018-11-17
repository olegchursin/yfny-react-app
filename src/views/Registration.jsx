import React, { Component } from 'react';
import InnerPageHero from '../components/InnerPageHero';
import RegistrationClosedContent from '../components/RegistrationClosedContent';

const styles = {
  form: {
    padding: '0 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

{
  /* <iframe
  onLoad={this.scrollToTop}
  src="https://docs.google.com/forms/d/e/1FAIpQLScBieN1X779Ry2iNmavPMZaj_G7kTGt8YC5CzbOObFvzdNQEQ/viewform?embedded=true"
  width="640"
  height="1700"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  title="Registration form"
>
  Loading...
</iframe>; */
}

export class Registration extends Component {
  scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <div>
        <InnerPageHero title={'Регистрация'} />
        <div style={styles.form}>
          <RegistrationClosedContent />
        </div>
      </div>
    );
  }
}

export default Registration;
