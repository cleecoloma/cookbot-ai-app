import React from "react";
import axios from "axios";
// import { withAuth0 } from "@auth0/auth0-react";
import RecipeModal from './assets/components/AddModal';

const PORT = import.meta.env.VITE_server_url;


fetchRecipe = async () => {
    axios.get(`${PORT}/recipes`)
    .then(response => {
        this.setState({recipes: response.data})
        console.log(response.data)
    });
}