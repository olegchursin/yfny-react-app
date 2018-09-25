import React from 'react';
import {Timeline, Icon, Divider} from 'antd';

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
}

const ProgramInfo = () => {
    return (
        <div style={styles.programInfoWrapper}>
            <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
            <Divider style={styles.divider}>РЕГЛАМЕНТ ВЫСТУПЛЕНИЙ</Divider>
            <p>Выступление спикеров составляет 10 минут. После выступлений спикеры отвечают
                на вопросы участников.</p>
            <Divider
                style={{
                ...styles.divider,
                marginTop: 80
            }}>Предварительная программа</Divider>
            <div style={styles.timeline}>
                <Timeline mode="alternate" pending="В программе возможны изменения">
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>15:00-16:00</p>
                        <h4>РЕГИСТРАЦИЯ УЧАСТНИКОВ</h4>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>16:00-17:00</p>
                        <h4>ЧАСТЬ ПЕРВАЯ: СОХРАНЕНИЕ ИСТОРИЧЕСКОГО НАСЛЕДИЯ</h4>
                        <p>Посвящена популяризации русской культуры, традиций и языка и укреплению связей с Россией.</p>
                        <p>Приветственное слово: Анатолий Антонов, Посол РФ в США</p>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>17.00–17.15</p>
                        <h4>КОФЕ-БРЕЙК</h4>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>17.15–18.30</p>
                        <h4>ЧАСТЬ ВТОРАЯ: КОНСОЛИДАЦИЯ РУССКО-АМЕРИКАНСКОЙ МОЛОДЕЖИ</h4>
                        <p>Посвящена консолидации русско-американской молодежи в Америке.</p>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>18:30-19.30</p>
                        <h4>ЧАСТЬ ТРЕТЬЯ: ПРЕЗЕНТАЦИИ МОЛОДЕЖНЫХ ПРОЕКТОВ</h4>
                        <p>Презентации прошедших предварительный отбор молодежных проектов.</p>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>19:30-21.00</p>
                        <h4>ЧАСТЬ ЧЕТВЕРТАЯ: ПРИЕМ ОТ ИМЕНИ ПОСЛА РФ В США АНАТОЛИЯ АНТОНОВА.</h4>
                    </Timeline.Item>
                    <Timeline.Item
                        dot={< Icon type = "clock-circle-o" style = {{ fontSize: '16px' }}/>}>
                        <p>21:00-22.30</p>
                        <h4>ФИЛЬМ</h4>
                    </Timeline.Item>
                </Timeline>
            </div>

        </div>

    )
}

export default ProgramInfo;