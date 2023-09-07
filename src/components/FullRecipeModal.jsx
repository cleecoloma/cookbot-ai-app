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
          fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Full Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="recipe-content">
            <h3 className="recipe-title">{this.props.editRecipe ? this.props.editRecipe.dishName : null}</h3>
            <img
              className="img-fluid recipe-image"
              src={this.props.editRecipe ? this.props.editRecipe.imageUrl : null}
              alt="Recipe"
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
            <div className="recipe-steps">
              <ul>
                {this.props.editRecipe &&
                  this.props.editRecipe.cookingSteps.map((step, recipIdx) => (
                    <li key={recipIdx}>{step}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-ingredients">
              <h4>
                <strong>Ingredients:</strong>
              </h4>
              <ul>
                {this.props.editRecipe &&
                  this.props.editRecipe.ingredients.map((ingredient, ingrIdx) => (
                    <li key={ingrIdx}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {
            console.log('Deleting recipe with _id:', this.props.editRecipe._id);
              this.props.deleteRecipe(this.props.editRecipe._id);
              this.props.onHide();
            }}>
            Delete Recipe
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
