import React from "react";
import './Recipe.css'
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import AddModal from "./AddModal";
import { Button } from 'react-bootstrap';
// import { withAuth0 } from "@auth0/auth0-react";

const PORT = import.meta.env.VITE_SERVER_URL;

class Recipe extends React.Component {

  state = {
      recipes: [],
      showModal: false,
  }

  componentDidMount() {
      this.fetchRecipes();
  }

  handleShowModal = () => {
      this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

    //GET//
  fetchRecipes = async () => {
      axios.get(`${PORT}/recipes`)
      .then(response => {
          this.setState({recipes: response.data})
          console.log(response.data)
      });
  }

  //POST//
  addRecipe = (input) => {
    let ingredientsObj = {foodItems: input}
    const config = {
      method: 'POST',
      baseURL: `${PORT}`,
      url: '/recipes',
      data: ingredientsObj,
    };
     console.log('Im here before post request', { ingredientsObj });
     axios(config).then(response => {
        this.setState({recipes: [...this.state.recipes, response.data]})
        console.log(response.data)
    });
  };

    //PUT//
    updateRecipe = async (id, updatedData) => {
        axios.put(`${PORT}/recipes/${id}`, updatedData)
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

    //DELETE//
    deleteRecipe = async (id) => {
        axios.delete(`${PORT}/recipes/${id}`)
        .then(response => {
            const filteredRecipes = this.state.recipes.filter(recipe => recipe.id !== id);
            this.setState({recipes: filteredRecipes});
            console.log(response.data)
        });
    }

    render() {
        return (
            <div>
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
                <Button variant="outline-success" onClick={this.handleShowModal}>Add New Recipe</Button>
                <AddModal 
                    show={this.state.showModal} 
                    onHide={this.handleCloseModal}
                    addRecipe={this.addRecipe}
                />
                    <h3 >{recipe.dishName}</h3>
                    <ul>
                      <h4>
                        <strong>Ingredients:</strong>
                      </h4>
                            <ul>
                                {recipe.ingredients && recipe.ingredients.map((ingredient, ingrIdx) => (
                                    <li key={ingrIdx}>{ingredient}</li>
                                ))}
                            </ul>
                        {/* Add more items here as needed */}
                    </ul>
                <Button varian="outline-success" onClick={this.handleShowModal}>Delete Recipe</Button>
                </div>
            </div>
        </Carousel.Item>
    ))}
  </Carousel>

      </div>
    );
  }
}

export default Recipe;



