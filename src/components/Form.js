import { Component } from 'react';
import CardName from './CardName';
import CardDescription from './CardDescription';
import FirstAttribute from './FirstAttribute';
import SecondAttribute from './SecondAttribute';
import ThirdAttribute from './ThirdAttribute';
import CardImage from './CardImage';
import CardRarity from './CardRarity';
import SuperTrunfoCheck from './SuperTrunfoCheck';
import SaveButton from './SaveButton';

class Form extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <>
        <CardName />
        <CardDescription />
        <FirstAttribute />
        <SecondAttribute />
        <ThirdAttribute />
        <CardImage />
        <CardRarity />
        <>
          <SuperTrunfoCheck />
          <SaveButton />
        </>
      </>
    );
  }
}

export default Form;
