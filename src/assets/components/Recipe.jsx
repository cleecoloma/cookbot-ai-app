import React from 'react';
import './Recipe.css';
import Carousel from 'react-bootstrap/Carousel';
import AddModal from './AddModal';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import { useAuthRequest } from '../../Auth_Folder/Authorization';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      showModal: false,
      token: null,
    };
  }

  async componentDidMount() {
    // grab a token
    const res = await this.props.auth0.getIdTokenClaims();
    const token = res.__raw;
    this.setState({ token: token });
    this.fetchRecipes(this.state.token);
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  //GET//
  fetchRecipes = async () => {
    const authRequest = useAuthRequest();
    authRequest('GET', this.state.token, null, null).then((response) => {
      this.setState({ recipes: response.data });
      console.log(response.data);
    });
  };

  //POST//
  addRecipe = async (input) => {
    let ingredientsObj = { foodItems: input };
    const authRequest = useAuthRequest();
    authRequest('POST', this.state.token, null, ingredientsObj).then(
      (response) => {
        this.setState({ recipes: [...this.state.recipes, response.data] });
        console.log(response.data);
      }
    );
  };

  //PUT//
  updateRecipe = async (id, updatedData) => {
    const authRequest = useAuthRequest();
    authRequest('PUT', this.state.token, id, updatedData).then((response) => {
      const updatedRecipes = this.state.recipes.map((recipe) => {
        if (recipe.id === id) {
          return response.data;
        }
        return recipe;
      });
      this.setState({ recipes: updatedRecipes });
      console.log(response.data);
    });
  };

  //DELETE//
  deleteRecipe = async (id) => {
    const authRequest = useAuthRequest();
    authRequest('DELETE', this.state.token, id, null).then((response) => {
      const filteredRecipes = this.state.recipes.filter(
        (recipe) => recipe.id !== id
      );
      this.setState({ recipes: filteredRecipes });
      console.log(response.data);
    });
  };

  render() {
    return (
      <div>
        <Button variant="outline-success" onClick={this.handleShowModal}>
          Add New Recipe
        </Button>
        <AddModal
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          addRecipe={this.addRecipe}
        />
        <Carousel>
          {this.state.recipes.map((recipe, idx) => (
            <Carousel.Item key={idx} className="carousel-item-custom">
              <div className="d-flex justify-content-center align-items-center recipe-content">
                <img
                  className="img-fluid recipe-placeholder mx-3"
                  src="https://placehold.co/600x400"
                  alt="Recipe Image Placeholder"
                />
                <div>
                  <h3>{recipe.dishName}</h3>
                  <ul>
                    <h4>
                      <strong>Ingredients:</strong>
                    </h4>
                    <ul>
                      {recipe.ingredients &&
                        recipe.ingredients.map((ingredient, ingrIdx) => (
                          <li key={ingrIdx}>{ingredient}</li>
                        ))}
                    </ul>
                    {/* Add more items here as needed */}
                  </ul>
                  <Button
                    varian="outline-success"
                    onClick={this.handleShowModal}
                  >
                    Delete Recipe
                  </Button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

const AuthRecipe = withAuth0(Recipe);

export default AuthRecipe;
