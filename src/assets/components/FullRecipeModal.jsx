import React from 'react';
import {Modal, Button, Form, ListGroup} from 'react-bootstrap'
import PropTypes from 'prop-types';


class FullRecipeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ingredients: [''],
    };
  }

  async componentDidMount() {
    const res = await this.props.auth0.getIdTokenClaims();
    const token = res.__raw;
    this.setState({ token }, () => {
      this.fetchRecipes();
    });
  }
  
  //GET//
  fetchRecipes = async () => {
    this.props.authRequest('GET', this.state.token, null, null)
    .then(response => {
        this.setState({recipes: response.data})
        console.log(response.data)
    });
  }

  //POST//
  addRecipe = async (input) => {
    let ingredientsObj = {foodItems: input}
    this.props.authRequest('POST', this.state.token, null, ingredientsObj)
    .then(response => {
        this.setState({recipes: [...this.state.recipes, response.data]})
        console.log(response.data)
    });
  };

  //PUT//
  updateRecipe = async (id, updatedData) => {
    this.props.authRequest('PUT', this.state.token, id, updatedData)
    .then(response => {
        const updatedRecipes = this.state.recipes.map(recipe => {
            if (recipe.id === id) {
                return response.data;
            }
            return recipe;
        });
        this.setState({recipes: updatedRecipes});
        console.log(response.data)
    });
  }

  render() {
    return (
<Modal show={this.props.show} onHide={this.props.onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Full Recipe</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <h3>{recipe.dishName}</h3>
            <ul>
              <ul>
                {recipe.cookingSteps &&
                  recipe.cookingSteps.map((ingredient, recipIdx) => (
                    <li key={recipIdx}>{ingredient}</li>
                      ))}
                        </ul>
                          <h4>
                            <strong>
                              Ingredients:
                             </strong>
                          </h4>
                          <ul>
                        {recipe.ingredients &&
                      recipe.ingredients.map((ingredient, ingrIdx) => (
                    <li key={ingrIdx}>{ingredient}</li>
                  ))}
                </ul>
              {/* Add more items here as needed */}
            </ul>
          </Modal.Body>
        <Modal.Footer>
      <Button variant="secondary" onClick={this.props.onHide}>
          Close
      </Button>
    </Modal.Footer>
</Modal>
    );
  }
}

FullRecipeModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

FullRecipeModal.defaultProps = {
  show: false,
  onHide: () => {},
};

export default FullRecipeModal; 
