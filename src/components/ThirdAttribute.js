import { Component } from 'react';

class ThirdAttribute extends Component {
  render() {
    return (
      <label htmlFor="attr3-input">
        Third Attribute
        <br />
        <input type="number" data-testid="attr3-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default ThirdAttribute;
