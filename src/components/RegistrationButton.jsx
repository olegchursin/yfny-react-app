import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { typography } from '../utils/styles';

const styles = {
  registrationButton: {
    ...typography.lightSmallText,
    borderRadius: '50px',
    margin: '0 40px'
  }
};

const RegistrationButton = ({ title }) => {
  return (
    <Link to="/registration">
      <Button type="primary" style={styles.registrationButton}>
        {title}
      </Button>
    </Link>
  );
};

export default RegistrationButton;
