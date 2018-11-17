import React from 'react';
import { Timeline, Icon, Divider } from 'antd';

const styles = {
  divider: {
    width: '80%'
  },
  programInfoWrapper: {
    fontFamily: 'Rubik',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px 40px',
    textAlign: 'center'
  },
  timeline: {
    marginTop: 80
  }
};

const ProgramInfo = () => {
  return (
    <div style={styles.programInfoWrapper}>
      <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
      <Divider style={styles.divider}>РЕГЛАМЕНТ ВЫСТУПЛЕНИЙ</Divider>
      <p>
        Выступление спикеров составляет 10 минут. После выступлений спикеры
        отвечают на вопросы участников.
      </p>
      <Divider
        style={{
          ...styles.divider,
          marginTop: 80
        }}
      >
        Предварительная программа
      </Divider>
      <div style={styles.timeline}>
        <Timeline mode="alternate" pending="В программе возможны изменения">
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>15.00-16.00</p>
            <h4>РЕГИСТРАЦИЯ УЧАСТНИКОВ</h4>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>16.00-16.45</p>
            <h4>ЧАСТЬ ПЕРВАЯ: СОХРАНЕНИЕ НАСЛЕДИЯ</h4>
            <p>
              Посвящена укреплению связей с Россией, сохранению российского
              культурно исторического наследия и традиций
            </p>
            <p>
              Приветствие: <strong>Анатолий Антонов</strong>, Посол РФ в США
            </p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>16.45–17.15</p>
            <h4>ПЕРЕРЫВ</h4>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>17.15–18.15</p>
            <h4>ЧАСТЬ ВТОРАЯ: КОНСОЛИДАЦИЯ</h4>
            <p>Посвящена консолидации русско-американской молодежи в Америке</p>
            <p>
              Модератор: <strong>Елена Брэнсон</strong>, Председатель КСОРС США
            </p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>18.15-19.20</p>
            <h4>ЧАСТЬ ТРЕТЬЯ: ПРЕЗЕНТАЦИИ МОЛОДЕЖНЫХ ПРОЕКТОВ</h4>
            <p>
              Презентации прошедших предварительный отбор молодежных проектов.
              10 проектов.
            </p>
            <p>
              Модератор: <strong>Игорь Кочан</strong>, Руководитель молодежного
              отделения КСОРС США
            </p>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>19.20-19.30</p>
            <h4>Награждение победителей молодежных проектов</h4>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>19.30-20.00</p>
            <h4>Концерт. В программе русские арии и романсы</h4>
          </Timeline.Item>
          <Timeline.Item
            dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}
          >
            <p>20.00-22.00</p>
            <h4>Ужин</h4>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
};

export default ProgramInfo;
