import React from 'react';
import '../styles/FullRecipeModal.css';
import { Modal, Button } from 'react-bootstrap';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import PropTypes from 'prop-types';

function FullRecipeModal(props) {
  const handleTimestampCheck = (timestamp) => {
    const timestampDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - timestampDate;
    const oneHourInMilliS = 3600000; // One hour converted to milliseconds
    if (timeDifference > oneHourInMilliS - 360000) {
      return false; //subtracted 10 minutes from one hour
    } else {
      return true;
    }
  };

  return props.currentRecipe ? (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <div className='recipe-title'>
          <h3>{props.currentRecipe.dishName}</h3>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='recipe-container'>
          <div className='recipe-image-div'>
            <img
              className='recipe-image'
              src={
                handleTimestampCheck(props.currentRecipe.timestamp)
                  ? props.currentRecipe.imageUrl
                  : '../images/recipe-image-placeholder.png'
              }
              alt={props.currentRecipe.dishName}
            />
            <p className='recipe-image-see-more'>SEE MORE</p>
          </div>

          <div className='recipe-text'>
            <div className='recipe-icons'>
              <div className='recipe-icons-divs'>
                <HourglassBottomIcon />
                <p>PREP: {props.currentRecipe.prepDuration}</p>
              </div>
              <div className='recipe-icons-divs'>
                <AccessTimeIcon />
                <p>COOK: {props.currentRecipe.cookingDuration}</p>
              </div>
              <div className='recipe-icons-divs'>
                <RestaurantIcon />
                <p>SERVING: {props.currentRecipe.servingSize}</p>
              </div>
            </div>
            <div className='ingredients'>
              <p>INGREDIENTS</p>
              <ul>
                {props.currentRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className='directions'>
              <p>DIRECTIONS</p>
              <ol>
                {props.currentRecipe.cookingSteps.map((direction, index) => (
                  <li key={index}>{direction}</li>
                ))}
              </ol>
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
