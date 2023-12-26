import React, { useContext } from 'react';
import '../styles/FullRecipeModal.css';
import { Modal, Button } from 'react-bootstrap';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { RecipeContext } from '../context/Recipe';
import { LoginContext } from '../context/Login';

function FullRecipeModal() {
  const {
    showFullRecipeModal,
    currentRecipe,
    handleShowFullRecipeModal,
    handleCloseFullRecipeModal,
    deleteRecipe,
  } = useContext(RecipeContext);

  const { loggedUser } = useContext(LoginContext);

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

  return currentRecipe ? (
    <Modal
      show={showFullRecipeModal}
      onHide={handleShowFullRecipeModal}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <div className='recipe-title'>
          <h3>{currentRecipe.dishName}</h3>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='recipe-container'>
          <div className='recipe-image-div'>
            <img
              className='recipe-image'
              src={
                handleTimestampCheck(currentRecipe.timestamp)
                  ? currentRecipe.imageUrl
                  : '../images/recipe-image-placeholder.png'
              }
              alt={currentRecipe.dishName}
            />
            <p className='recipe-image-see-more'>SEE MORE</p>
          </div>

          <div className='recipe-text'>
            <div className='recipe-icons'>
              <div className='recipe-icons-divs'>
                <HourglassBottomIcon />
                <p>PREP: {currentRecipe.prepDuration}</p>
              </div>
              <div className='recipe-icons-divs'>
                <AccessTimeIcon />
                <p>COOK: {currentRecipe.cookingDuration}</p>
              </div>
              <div className='recipe-icons-divs'>
                <RestaurantIcon />
                <p>SERVING: {currentRecipe.servingSize}</p>
              </div>
            </div>
            <div className='ingredients'>
              <p>INGREDIENTS</p>
              <ul>
                {currentRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className='directions'>
              <p>DIRECTIONS</p>
              <ol>
                {currentRecipe.cookingSteps.map((direction, index) => (
                  <li key={index}>{direction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ margin: '0 auto' }}>
        <Button
          variant='danger'
          style={{ width: '6rem' }}
          onClick={() => {
            deleteRecipe(currentRecipe._id, loggedUser.token);
            handleCloseFullRecipeModal();
          }}
        >
          Delete
        </Button>
        <Button
          variant='secondary'
          onClick={handleCloseFullRecipeModal}
          style={{ width: '6rem' }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
}

export default FullRecipeModal;
