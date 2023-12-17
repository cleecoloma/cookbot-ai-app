import React, { useState } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';

function EditModal(props) {
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
    console.log('Submitted recipe', ingredients);
    props.updateRecipe(props.editRecipe._id, ingredients);
    props.toggleLoading();
    props.onHide();
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <ListGroup>
            {props.editRecipe
              ? props.editRecipe.ingredients.map((ingredient, index) => (
                  <ListGroup.Item key={index}>
                    <Form.Control
                      type='text'
                      placeholder={ingredient}
                      onChange={(e) =>
                        handleIngredientChange(index, e.target.value)
                      }
                    />
                  </ListGroup.Item>
                ))
              : null}
          </ListGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
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

export default EditModal;
