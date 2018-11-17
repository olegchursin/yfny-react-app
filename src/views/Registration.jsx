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
