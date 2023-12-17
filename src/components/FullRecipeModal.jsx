import React from 'react';
import '../styles/FullRecipeModal.css';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function FullRecipeModal(props) {
  return props.currentRecipe ? (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <h3 className='recipe-title'>
            {' '}
            Full Recipe for{' '}
            {props.currentRecipe ? props.currentRecipe.dishName : null}
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='recipe-content'>
          <img
            className='img-fluid recipe-image'
            src={
              props.handleTimestampCheck(props.currentRecipe.timestamp)
                ? props.currentRecipe.imageUrl
                : '/images/cookbot-ai-default-img.jpg'
            }
            alt={props.currentRecipe.name}
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'cover',
            }}
            title='OpenAI generated the image, but response url has limited lifespan of only one hour, after which they will automatically revert to this default image.'
          />
          <div className='recipe-details'>
            <div className='recipe-duration'>
              <h4>
                <strong>Cooking Time:</strong>
              </h4>
              <ul>
                <li>
                  {props.currentRecipe
                    ? props.currentRecipe.cookingDuration
                    : null}
                </li>
              </ul>
            </div>
            <div className='recipe-ingredients'>
              <h4>
                <strong>Ingredients:</strong>
              </h4>
              <ul>
                {props.currentRecipe &&
                  props.currentRecipe.ingredients.map((ingredient, ingrIdx) => (
                    <li key={ingrIdx}>{ingredient}</li>
                  ))}
              </ul>
            </div>
            <div className='recipe-steps'>
              <h4>
                <strong>Cooking Steps</strong>
              </h4>
              <ul>
                {props.currentRecipe &&
                  props.currentRecipe.cookingSteps.map((step, recipIdx) => (
                    <li key={recipIdx}>{step}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ margin: '0 auto' }}>
        <Button
          variant='primary'
          style={{ width: '6rem' }}
          onClick={() => {
            props.handleUpdateRecipe(props.currentRecipe);
          }}
        >
          Edit
        </Button>
        <Button
          variant='danger'
          style={{ width: '6rem' }}
          onClick={() => {
            console.log('Deleting recipe with _id:', props.currentRecipe._id);
            props.deleteRecipe(props.currentRecipe._id);
            props.onHide();
          }}
        >
          Delete
        </Button>
        <Button
          variant='secondary'
          onClick={props.onHide}
          style={{ width: '6rem' }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
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
