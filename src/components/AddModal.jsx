'use strict';

import React, { useState, useContext } from 'react';
import { Modal, Button, Form, ListGroup, Alert } from 'react-bootstrap';
import { LoginContext } from '../context/Login';
import { RecipeContext } from '../context/Recipe';
import '../styles/AddModal.css';

function AddModal() {
  const [ingredients, setIngredients] = useState(['']);
  const [showAlert, setShowAlert] = useState(false);

  const { showModal, handleShowModal, addRecipe } = useContext(RecipeContext);
  const { loggedUser } = useContext(LoginContext);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleSubmit = () => {
    const filledIngredients = ingredients.filter((ing) => ing.trim() !== '');

    if (filledIngredients.length < 2) {
      setShowAlert(true);
      return;
    }

    addRecipe(loggedUser.email, ingredients, loggedUser.token);
    setIngredients(['']);
    handleShowModal();
  };

  return (
    <Modal show={showModal} onHide={handleShowModal}>
      <Modal.Header id='add-modal-header' closeButton>
        <Modal.Title id='new-recipe-title'>New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body id='add-modal-header'>
        {showAlert && (
          <Alert
            variant='danger'
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Please fill in at least 2 ingredients.
          </Alert>
        )}
        <Form>
          {ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index} className='d-flex align-items-center'>
              <Form.Control
                type='text'
                className='ingredient-input me-2'
                placeholder='Enter ingredient'
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
              />
            </ListGroup.Item>
          ))}

          <Button
            id='add-ingredient-button'
            variant='primary'
            onClick={handleAddIngredient}
          >
            Add Ingredient
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer id='add-modal-footer'>
        <Button id='recipe-close-button' onClick={handleShowModal}>
          Close
        </Button>
        <Button id='submit-recipe-button' onClick={handleSubmit}>
          Submit Recipe
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
