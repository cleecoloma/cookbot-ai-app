import React from 'react';
import './FullRecipeModal.css';
import {Modal, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';


class FullRecipeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        fullscreen={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="recipe-title">
              {' '}
              Full Recipe for{' '}
              {this.props.currentRecipe
                ? this.props.currentRecipe.dishName
                : null}
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="recipe-content">
            <img
              className="img-fluid recipe-image"
              src={
                this.props.currentRecipe
                  ? this.props.currentRecipe.imageUrl
                  : null
              }
              alt="Recipe"
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
            <div className="recipe-details">
              <div className="recipe-duration">
                <h4>
                  <strong>Cooking Time:</strong>
                </h4>
                <ul>
                  <li>
                    {this.props.currentRecipe
                      ? this.props.currentRecipe.cookingDuration
                      : null}
                  </li>
                </ul>
              </div>
              <div className="recipe-ingredients">
                <h4>
                  <strong>Ingredients:</strong>
                </h4>
                <ul>
                  {this.props.currentRecipe &&
                    this.props.currentRecipe.ingredients.map(
                      (ingredient, ingrIdx) => (
                        <li key={ingrIdx}>{ingredient}</li>
                      )
                    )}
                </ul>
              </div>
              <div className="recipe-steps">
                <h4>
                  <strong>Cooking Steps</strong>
                </h4>
                <ul>
                  {this.props.currentRecipe &&
                    this.props.currentRecipe.cookingSteps.map(
                      (step, recipIdx) => <li key={recipIdx}>{step}</li>
                    )}
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ margin: '0 auto' }}>
          <Button
            variant="primary"
            style={{ width: '6rem' }}
            onClick={() => {
              this.props.handleUpdateRecipe(this.props.currentRecipe);
            }}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            style={{ width: '6rem' }}
            onClick={() => {
              console.log(
                'Deleting recipe with _id:',
                this.props.currentRecipe._id
              );
              this.props.deleteRecipe(this.props.currentRecipe._id);
              this.props.onHide();
            }}
          >
            Delete
          </Button>
          <Button
            variant="secondary"
            onClick={this.props.onHide}
            style={{ width: '6rem' }}
          >
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
  deleteRecipe: PropTypes.func.isRequired,
  editRecipe: PropTypes.object,
};

FullRecipeModal.defaultProps = {
  show: false,
  onHide: () => {},
  deleteRecipe: () => {},
  editRecipe: null,
};

export default FullRecipeModal; 
