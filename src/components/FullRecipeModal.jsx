import React from 'react';
import '../styles/FullRecipeModal.css';
import {Modal, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';


class FullRecipeModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.currentRecipe ? (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
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
                this.props.handleTimestampCheck(this.props.currentRecipe.timestamp)
                  ? this.props.currentRecipe.imageUrl
                  : 'src/images/cookbot-ai-default-img.png'
              }
              alt={this.props.currentRecipe.name}
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
              title="AI generates the images, and their lifespan is limited to only two hours. Once this time elapses, the image will automatically revert to a default one."
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
    ) : null;
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
