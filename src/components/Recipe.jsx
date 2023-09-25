import React from 'react';
import '../styles/Recipe.css';
import Carousel from 'react-bootstrap/Carousel';
import AddModal from './AddModal';
import FullRecipeModal from './FullRecipeModal';
import { Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import EditModal from './EditModal';

const DEMO_TOKEN = import.meta.env.VITE_DEMO_TOKEN;

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      recipes: [],
      showModal: false,
      showFullRecipeModal: false,
      currentRecipe: null,
      token: null,
      editRecipe: null,
      showEditModal: false,
      isLoading: false,
    };
  }

  async componentDidMount() {
    // grab a token
    if (this.props.isDemoAccount) {
      const token = DEMO_TOKEN;
      const user = this.props.demoUser;
      this.setState(
        {
          token,
          user,
        },
        () => {
          this.fetchRecipes(user.email);
        }
      );
    } else {
      const res = await this.props.auth0.getIdTokenClaims();
      const token = res.__raw;
      this.setState({ 
        user: res,
        token }, () => {
        this.fetchRecipes(res.email);
        // this.props.handleProfilePage(res);
      });
    }
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowEditModal = () => {
    this.setState({ showEditModal: true });
  };

  handleCloseEditModal = () => {
    this.setState({ showEditModal: false });
  };

  handleShowFullRecipeModal = (recipe) => {
    this.setState({
      showFullRecipeModal: true,
      currentRecipe: recipe,
    });
  };

  handleCloseFullRecipeModal = () => {
    this.setState({ showFullRecipeModal: false });
  };

  //GET//
  fetchRecipes = async (email) => {
    const queryParams = { user: email };
    this.props
      .authRequest('GET', this.state.token, null, null, queryParams)
      .then((response) => {
        this.setState({ recipes: response.data });
      });
  };

  //POST//
  addRecipe = async (input) => {
    let ingredientsObj = { 
      user: this.state.user.email,
      foodItems: input 
    };
    this.props
      .authRequest('POST', this.state.token, null, ingredientsObj)
      .then((response) => {
        this.setState(
          { recipes: [...this.state.recipes, response.data] },
          () => {
            this.toggleLoading();
          }
        );
      });
  };

  //PUT//
  updateRecipe = async (id, updatedData) => {
    this.props
      .authRequest('PUT', this.state.token, id, updatedData)
      .then((response) => {
        const updatedRecipes = this.state.recipes.map((recipe) => {
          if (recipe.id === id) {
            return response.data;
          }
          return recipe;
        });
        this.setState({ recipes: updatedRecipes }, () => {
          this.toggleLoading();
        });
        this.fetchRecipes();
      });
  };

  //DELETE//
  deleteRecipe = async (id) => {
    this.props
      .authRequest('DELETE', this.state.token, id, null)
      .then((response) => {
        const filteredRecipes = this.state.recipes.filter(
          (recipe) => recipe._id !== id
        );
        this.setState({ recipes: filteredRecipes });
      });
  };

  handleUpdateRecipe = (recipe) => {
    this.setState({
      editRecipe: recipe,
      showFullRecipeModal: false,
      showEditModal: true,
    });
  };

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  };

  handleTimestampCheck = (timestamp) => {
    const timestampDate = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - timestampDate;
    const twoHoursInMilliS = 3600000 // One hour converted to milliseconds
    if (timeDifference > twoHoursInMilliS) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <>
        <Button
          className="addButton"
          style={{ width: '10rem', margin: '0 auto' }}
          variant="success"
          onClick={this.handleShowModal}
        >
          Add New Recipe
        </Button>
        <AddModal
          user={this.state.user}
          show={this.state.showModal}
          onHide={this.handleCloseModal}
          addRecipe={this.addRecipe}
          toggleLoading={this.toggleLoading}
        />
        <EditModal
          show={this.state.showEditModal}
          onHide={this.handleCloseEditModal}
          editRecipe={this.state.editRecipe}
          updateRecipe={this.updateRecipe}
          toggleLoading={this.toggleLoading}
        />
        {this.state.isLoading ? (
          /* Loading screen/Div with className loader is from https://webdeasy.de/en/css-loading-animations/ - Author John Heiner */
          <div className="loader">
            <div className="tall-stack">
              <div className="butter falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="pancake falling-element"></div>
              <div className="plate">
                <div className="plate-bottom"></div>
                <div className="shadow"></div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: '1rem 5%',
            }}
          >
            {this.state.recipes.length > 0 ? (
              <Carousel className="custom-carousel">
                {this.state.recipes.map((recipe, idx) => (
                  <Carousel.Item key={idx} interval={2500}>
                    <img
                      className="d-block w-100"
                      src={
                        this.handleTimestampCheck(recipe.timestamp)
                          ? recipe.imageUrl
                          : '/public/images/cookbot-ai-default-img.png'
                      }
                      alt={recipe.name}
                      style={{
                        width: '400px',
                        height: '400px',
                        objectFit: 'cover',
                      }}
                      title="AI generates the images, and their lifespan is limited to only two hours. Once this time elapses, the image will automatically revert to a default one."
                    />
                    <div className="info-div">
                      <h3>{recipe.dishName}</h3>
                      <Button
                        variant="success"
                        onClick={() => this.handleShowFullRecipeModal(recipe)}
                      >
                        Click Here For Full Recipe!
                      </Button>
                      <FullRecipeModal
                        show={this.state.showFullRecipeModal}
                        onHide={this.handleCloseFullRecipeModal}
                        currentRecipe={this.state.currentRecipe}
                        updateRecipe={this.updateRecipe}
                        handleUpdateRecipe={this.handleUpdateRecipe}
                        deleteRecipe={this.deleteRecipe}
                        handleTimestampCheck={this.handleTimestampCheck}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : null}
          </div>
        )}
      </>
    );
  }
}

const AuthRecipe = withAuth0(Recipe);

export default AuthRecipe;
