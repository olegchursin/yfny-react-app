import React from 'react';
import { typography } from '../utils/styles';
import { img } from '../utils/images';
import { Divider } from 'antd';
import RegistrationButton from './RegistrationButton';

const styles = {
  cta: {
    margin: '40px 0'
  },
  divider: {
    ...typography.paragraph,
    fontSize: '1.5em',
    fontWeight: 400
  },
  consulateMap: {
    maxWidth: '60%',
    margin: '40px auto'
  },
  consulateSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 40px',
    fontFamily: 'Rubik'
  },
  paragraph: {
    ...typography.paragraph,
    textAlign: 'center'
  },
  textualInfo: {
    width: '80%',
    textAlign: 'center'
  }
};

const HomePageConsulate = () => {
  return (
    <div style={styles.consulateSectionWrapper}>
      <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
      <div style={styles.textualInfo}>
        <h3>Будущее русско-американской молодежи США</h3>
        <Divider style={styles.divider}>Место проведения</Divider>
        <p style={styles.paragraph}>
          <a href="https://newyork.mid.ru//">
            Генеральное консульство России в Нью-Йорке
          </a>
        </p>
        <p style={styles.paragraph}>
          Consulate-General of Russia in New York City: 9 E 91Street, New York,
          NY 10128
        </p>
        <img
          style={styles.consulateMap}
          src={img.consulateMap.url}
          alt={img.consulateMap.alt}
        />
        <p style={styles.paragraph}>
          Генеральное консульство России в Нью-Йорке расположено в красивейшем
          особняке The John Henry Hammond House, построенном в 1903 году стиле
          позднего ренессанса на престижной 91 улице Манхэттена. Это пятиэтажное
          здание, построенное в спиле эпохи Возрождения, было спроектировано
          Каррером и Гастингсом, которые также выполнили дизайн Нью-йоркской
          публичной библиотеки. Этот особняк с деталями итальянского палаццо 16
          и 18 века считается одним из самых лучших манхэттенских таунхаусов.
          Интерьер представляет собой богатую серию комнат в стиле Людовика XVI
          с изысканными мраморами, резьбой, гобеленами и мебелью.
        </p>
      </div>
      <div style={styles.cta}>
        <RegistrationButton title={'Зарегистрироваться'} />
      </div>
    </div>
  );
};

export default HomePageConsulate;
