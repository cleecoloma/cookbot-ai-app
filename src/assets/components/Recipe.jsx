import React from "react";
import AddModal from "./AddModal";
import { Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import useAuthRequest from "../../Auth_Folder/Authorization";
// import axios from "axios";


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
        const authRequest = useAuthRequest();
        authRequest('GET', null, null)
        .then(response => {
            this.setState({recipes: response.data})
            console.log(response.data)
        });
    }

  //POST//
  addRecipe = async (input) => {
    let ingredientsObj = {foodItems: input}
    const authRequest = useAuthRequest();
    authRequest('POST', null, ingredientsObj)
    .then(response => {
        this.setState({recipes: [...this.state.recipes, response.data]})
        console.log(response.data)
    });
};

    //PUT//
    updateRecipe = async (id, updatedData) => {
        const authRequest = useAuthRequest();
        authRequest('PUT', id, updatedData)
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
        const authRequest = useAuthRequest();
        authRequest('DELETE', id, null)
        .then(response => {
            const filteredRecipes = this.state.recipes.filter(recipe => recipe.id !== id);
            this.setState({recipes: filteredRecipes});
            console.log(response.data)
        });
    }

    render() {
        return (
            <div>
                <Button variant="outline-success" onClick={this.handleShowModal}>Add New Recipe</Button>
                <AddModal 
                    show={this.state.showModal} 
                    onHide={this.handleCloseModal}
                    addRecipe={this.addRecipe}
                />
            </div>
        );
    }
}

const AuthRecipe = withAuth0(Recipe);

export default AuthRecipe;



