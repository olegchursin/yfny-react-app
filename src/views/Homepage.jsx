import React, {Component} from 'react'
import HomePageHero from '../components/HomePageHero'
import HomePageInfo from '../components/HomePageInfo'
import DateCallToAction from '../components/DateCallToAction';
import HomePageConsulate from '../components/HomePageConsulate';

export class Homepage extends Component {
    render() {
        return (
            <div>
                <HomePageHero/>
                <HomePageInfo/>
                <DateCallToAction/>
                <HomePageConsulate/>
            </div>
        )
    }
}

export default Homepage
