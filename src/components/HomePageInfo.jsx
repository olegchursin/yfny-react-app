import React from 'react';
import {rcny} from '../utils/info';
import {typography} from '../utils/styles';
import {Divider} from 'antd';
import RegistrationButton from './RegistrationButton'

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
}

const HomePageInfo = () => {
    return (
        <div style={styles.infoSectionWrapper}>

            <h1>МОЛОДЕЖНЫЙ ФОРУМ В НЬЮ-ЙОРКЕ</h1>
            <div style={styles.textualInfo}>
                <Divider style={styles.divider}>Информация</Divider>

                <p style={styles.paragraph}>Приглашаем вас на дискуссию о будущем российской
                    молодежи в США, сохранении российского исторического наследия и популяризации
                    русской культуры и языка, международном сотрудничестве и консолидации молодежи.</p>
                <p style={styles.paragraph}>На форуме проходят дискуссии на русском языке:
                    пленарные сессии, панельные дискуссии и презентаций молодежных проектов.
                    Участники форума - это молодежные организации русских американцев, студенты,
                    молодые специалисты и творческая интеллигенция. На форуме выступят представители
                    МИД России, Правительства Москвы, Координационного совета организаций российских
                    соотечественников США и других объединений соотечественников, проживающих в США,
                    духовенство, влиятельные соотечественники и эксперты, ведущие представители
                    русской эмиграции разных волн, а также местных органов власти.</p>

                <div style={styles.organizers}>
                    <Divider style={styles.divider}>Организаторы</Divider>
                    <h3>Форум проводится</h3>
                    <p style={styles.paragraph}>
                        <a href={rcny.website}>Русским центром в Нью-Йорке (Russian Center NY)</a>
                    </p>
                    <h3>под эгидой</h3>
                    <p style={styles.paragraph}>
                        <a href="https://washington.mid.ru/en/">Посольства</a>
                        &#160;и&#160;
                        <a href="https://newyork.mid.ru//">Генерального консульства РФ в Нью-Йорке</a>
                    </p>
                </div>
            </div>
            <RegistrationButton title={'Зарегистрироваться'}/>
        </div>
    )
}

export default HomePageInfo;
