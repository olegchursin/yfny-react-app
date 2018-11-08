import React from 'react';
import { rcny, russianYouth } from '../utils/info';
import { typography } from '../utils/styles';
import { Divider } from 'antd';
import RegistrationButton from './RegistrationButton';

const styles = {
  about: {
    marginTop: 20
  },
  divider: {
    ...typography.paragraph,
    fontSize: '1.5em',
    fontWeight: 400
  },
  infoSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 40px',
    fontFamily: 'Rubik'
  },
  organizers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0'
  },
  paragraph: {
    ...typography.paragraph,
    textAlign: 'center'
  },
  textualInfo: {
    width: '80%'
  }
};

const HomePageInfo = () => {
  return (
    <div style={styles.infoSectionWrapper}>
      <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
      <div style={styles.textualInfo}>
        <Divider style={styles.divider}>Информация</Divider>

        <p style={styles.paragraph}>
          Приглашаем вас на дискуссии о будущем российской молодежи в США,
          сохранении российского исторического наследия и популяризации русской
          культуры, актуальных вопросах развития русскоязычной общины.
        </p>
        <p style={styles.paragraph}>
          В форуме примут участие около 200 человек в возрасте от 18 до 35 лет
          из более 25 штатов, представляющих русскоязычную студенческую
          молодежь, молодых специалистов и ученых, различные общественные
          молодежные организации соотечественников США и представителей
          русскоязычных СМИ. Среди спикеров форума - государственные и
          общественные деятели, ученые, историки, представители СМИ,
          соотечественники из деловых кругов и студенты, духовенство,
          представители русской эмиграции разных волн. Форум проводится на
          русском языке.
        </p>

        <div style={styles.organizers}>
          <Divider style={styles.divider}>Организаторы</Divider>
          <h3>Форум проводится</h3>
          <p style={styles.paragraph}>
            <a href={rcny.website}>
              Русским центром в Нью-Йорке (Russian Center NY)
            </a>
          </p>
          <h3>при поддержке</h3>
          <p style={styles.paragraph}>
            <a href={russianYouth.website}>Общества Русская молодежь Америки</a>
          </p>
          <h3>под эгидой</h3>
          <p style={styles.paragraph}>
            <a href="https://ksors.org/">КСОРС</a>
          </p>
        </div>
      </div>
      <RegistrationButton title={'Зарегистрироваться'} />
    </div>
  );
};

export default HomePageInfo;
