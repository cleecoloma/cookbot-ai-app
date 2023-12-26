import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { RecipeContext } from '../context/Recipe';
import { LoginContext } from '../context/Login';
import '../styles/DeleteModal.css'

function DeleteModal() {
  const {
    deleteRecipe,
    currentRecipe,
    showDeleteModal,
    handleCloseDeleteModal,
    handleCloseFullRecipeModal,
  } = useContext(RecipeContext);

  const {
    loggedUser
  } = useContext(LoginContext);

  return (
    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          <p className='delete-modal-title'>Are you sure you want to delete the recipe below?</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='delete-modal-dish'>{currentRecipe.dishName}</Modal.Body>
      <Modal.Footer>
        <Button
          id='recipe-delete-button'
          onClick={() => {
            deleteRecipe(currentRecipe._id, loggedUser.token);
            handleCloseDeleteModal();
            handleCloseFullRecipeModal();
          }}
        >
          Delete Recipe
        </Button>
        <Button id='recipe-close-button' onClick={handleCloseDeleteModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
