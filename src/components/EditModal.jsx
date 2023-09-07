import React from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [''],
    };
  }

  handleAddIngredient = () => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, ''],
    }));
  };

  handleIngredientChange = (index, value) => {
    const updatedIngredients = [...this.state.ingredients];
    updatedIngredients[index] = value;
    this.setState({ ingredients: updatedIngredients });
  };

  handleSubmit = () => {
    console.log('Submitted recipe', this.state.ingredients);
    this.props.updateRecipe(this.props.editRecipe._id, this.state.ingredients);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ListGroup>
              {this.props.editRecipe
                ? this.props.editRecipe.ingredients.map((ingredient, index) => (
                    <ListGroup.Item key={index}>
                      <Form.Control
                        type="text"
                        placeholder={ingredient}
                        onChange={(e) =>
                          this.handleIngredientChange(index, e.target.value)
                        }
                      />
                    </ListGroup.Item>
                  ))
                : null}
            </ListGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditModal;
