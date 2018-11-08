import InnerPageHero from '../components/InnerPageHero';
import ContactPageContent from '../components/ContactPageContent';
import React, { Component } from 'react';

export class Contact extends Component {
  render() {
    return (
      <div>
        <InnerPageHero title={'Контакты'} />
        <ContactPageContent />
      </div>
    );
  }
}

export default Contact;
