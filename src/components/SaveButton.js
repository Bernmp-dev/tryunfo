import { Component } from 'react';

class SaveButton extends Component {
  render() {
    return (
      <>
        <br />
        <button type="button" data-testid="save-button">Save</button>
      </>
    );
  }
}

export default SaveButton;
