import { Component } from 'react';

class CardRarity extends Component {
  render() {
    return (
      <label htmlFor="rare-input">
        Raridade
        <br />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <br />
      </label>
    );
  }
}

export default CardRarity;
