import React from "react";
import axios from "axios";
// import { withAuth0 } from "@auth0/auth0-react";

const PORT = import.meta.env.VITE_SERVER_URL;

class Recipe extends React.Component {

    state = {
        recipes: [],
    }

    componentDidMount() {
        this.fetchRecipes();
    }

    //GET//
    fetchRecipes = async () => {
        axios.get(`${PORT}/recipes`)
        .then(response => {
            this.setState({recipes: response.data})
            console.log(response.data)
        });
    }

    //POST//
    addRecipe = async (ingredients) => {
        axios.post(`${PORT}/recipes`, ingredients)
        .then(response => {
            this.setState({recipes: [...this.state.recipes, response.data]})
            console.log(response.data)
        });
    }

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
}

export default Recipe;