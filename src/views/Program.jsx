import React, { Component } from 'react';
import InnerPageHero from '../components/InnerPageHero';
import ProgramInfo from '../components/ProgramInfo';

export class Program extends Component {
  render() {
    return (
      <div>
        <InnerPageHero title={'Программа'} />
        <ProgramInfo />
      </div>
    );
  }
}

export default Program;
