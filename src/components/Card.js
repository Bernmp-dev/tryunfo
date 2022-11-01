import { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      classIn,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className={ classIn }>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h4 data-testid="description-card">{ cardDescription }</h4>
        <h4 data-testid="attr1-card">{ cardAttr1 }</h4>
        <h4 data-testid="attr2-card">{ cardAttr2 }</h4>
        <h4 data-testid="attr3-card">{ cardAttr3 }</h4>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.defaultProps = {
  classIn: 'null',
};

Card.propTypes = {
  classIn: PropTypes.string,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
