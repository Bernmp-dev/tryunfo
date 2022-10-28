import { Component } from 'react';

class SecondAttribute extends Component {
  render() {
    return (
      <label htmlFor="attr2-input">
        Second Attribute
        <br />
        <input type="number" data-testid="attr2-input" />
        <br />
        <br />
      </label>
    );
  }
}

export default SecondAttribute;
