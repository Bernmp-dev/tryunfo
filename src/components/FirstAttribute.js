import { Component } from 'react';

class FirstAttribute extends Component {
  render() {
    return (
      <label htmlFor="attr1-input">
        First Attribute
        <br />
        <input type="number" data-testid="attr1-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default FirstAttribute;
