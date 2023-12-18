import React, { useState } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';
import '../styles/AddModal.css';

function AddModal(props) {
  const [ingredients, setIngredients] = useState(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const handleSubmit = () => {
    props.addRecipe(ingredients);
    props.toggleLoading();
    setIngredients(['']);
    props.onHide();
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
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
        <Button variant='secondary' onClick={props.onHide}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            handleSubmit();
            props.onHide();
          }}
        >
          Submit Recipe
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
