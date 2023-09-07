import React from 'react';
import {Modal, Button, Form, ListGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';


class FullRecipeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Full Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            {this.props.currentRecipe ? this.props.currentRecipe.dishName : null}
          </h3>
          <img
            className="img-fluid recipe-placeholder mx-3"
            src={this.props.currentRecipe ? this.props.currentRecipe.imageUrl : null}
            alt="Recipe Image Placeholder"
          />
          <ul>
            <ul>
              {this.props.currentRecipe &&
                this.props.currentRecipe.cookingSteps.map((step, recipIdx) => (
                  <li key={recipIdx}>{step}</li>
                ))}
            </ul>
            <h4>
              <strong>Ingredients:</strong>
            </h4>
            <ul>
              {this.props.currentRecipe &&
                this.props.currentRecipe.ingredients.map((ingredient, ingrIdx) => (
                  <li key={ingrIdx}>{ingredient}</li>
                ))}
            </ul>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {this.props.handleUpdateRecipe(this.props.currentRecipe)}}>
            Edit
          </Button>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

FullRecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

FullRecipeModal.defaultProps = {
  show: false,
  onHide: () => {},
};

export default FullRecipeModal; 
