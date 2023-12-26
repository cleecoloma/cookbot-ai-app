import React, { useState, useContext } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';
import { LoginContext } from '../context/Login';
import { RecipeContext } from '../context/Recipe';
import '../styles/AddModal.css';

function AddModal() {
  const [ingredients, setIngredients] = useState(['']);

  const { showModal, handleShowModal, addRecipe, toggleLoading } =
    useContext(RecipeContext);

    const {
      loggedUser,
    } = useContext(LoginContext);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleSubmit = () => {
    addRecipe(loggedUser.email, ingredients, loggedUser.token);
    setIngredients(['']);
    handleShowModal();
  };

  return (
    <Modal show={showModal} onHide={handleShowModal}>
      <Modal.Header id='add-modal-header' closeButton>
        <Modal.Title>New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body id='add-modal-header'>
        <Form>
          {ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>
              <Form.Control
                type='text'
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
        <Button variant='secondary' onClick={handleShowModal}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit Recipe
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
