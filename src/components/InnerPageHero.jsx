import React from 'react';
import { typography } from '../utils/styles';

const styles = {
  title: {
    ...typography.boldHugeText,
    color: 'white'
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    width: '100%',
    background: 'linear-gradient(135deg, #08AEEA 0%, #2AF598 100%)'
  }
};

const InnerPageHero = ({ title }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.title}>{title}</div>
    </div>
  );
};

export default InnerPageHero;
