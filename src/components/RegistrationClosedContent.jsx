import React from 'react';

const styles = {
  registrationClosedContentWrapper: {
    padding: '100px 40px',
    fontFamily: 'Rubik',
    textAlign: 'center'
  }
};
const RegistrationClosedContent = () => {
  return (
    <div style={styles.registrationClosedContentWrapper}>
      <h1>Регистрация на YFNY2018 закрыта.</h1>
      <p>
        По всем интересующим вопросам Вы можете связаться с организатором форума
        - Русским центром в Нью-Йорке.
      </p>
      <h3>
        E-mail:&#160;
        <a
          href="mailto:hello@russiancenterny.org? Subject=Message%20from%20official%20website.s"
          target="_top"
        >
          hello@russiancenterny.org
        </a>
      </h3>
    </div>
  );
};

export default RegistrationClosedContent;
