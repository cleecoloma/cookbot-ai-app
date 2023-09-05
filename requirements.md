# Vision

* The vision of this application is to give users a place to add, keep, delete, and discover new recipes.

* This problem solves the problem that many cookbooks don't offer: versatility. With a Cookbook, you can only *see* recipes. With this application, you can see, create, remove, and improvise your own recipes with the help of your AI tool!

* You want to care about this product because this product cares about YOU. It is designed around the user, from ease of access to accessability and implementation.

* ## Scope

* What will your product do?

* The application will allow a user to improvise a recipe with the help of OpenAI
* The user will be able to save their recipes generated so that they can access them at a later time
* The application will provide images based on the recipe name


* What does the product **NOT** do?

* The product will NOT allow a user to make requests outside of the query parameters
* Will not generate recipes not related to food requests

#### MVP Functionality

* Display a recipe generated from initial request
* Save a users data so they can view previously genereated recipes

### Stretch Goals

* Generate multiple images based on query
* Ability to re-prompted based on chached ingredients. (Think new recipe but same ingredients) I.E. Multiple responses for same ingredient list
* User could click an "explore" button that would redirect to a new page providing search results based on the recipe generated, in order to find similar recipes.

### Data Flow

1. User authenticates ID/Password or signs up to in order to access application
2. On login, User is then able to provide ingredients to prompt AI for recipe response
3. A recipe is genereated where the user can then save or delete the recipe card.
4. User can also navigate to "about us" page where developer bio information is located
5. After saving recipe card data, user can continue to prompt or log off.

### Non-functional requirements

##### Response Time

1. How it works:
  * Utilizing Thunder Client as a RESTful client in order to determine how long a request will take from the back-end. Seeing how the data needs to be possibly scaled in order to reduce latency times.
  * Optimize front-end request handling, make effecient API calls, and measure back-end processing speed.

##### Accessibility

1. How it works:
     * Any user should be able to utilize this application without impairment from development standpoint. Utilizing tools such as lighthouse in order to test the accessibility of our application
     * This will include checks for keyboard navigation, screen reading compatibility, viewport monitoring, and contrast ratios
     * There will also be "alt" text for each image so that readers have a clear description of their generated image.
