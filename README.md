# Recipes Web App 😋🍔🍕🍩🍰🍴
Build a Web App that allows users to view and search recipes. The app should allow users to view all recipes, or search for recipes by name or ingredients.

<!-- IN THE APP -->
## App Contains
* View all recipes
* Search for recipes
* Filter recipes by ingredients

<!-- SCRIPTS -->
## Available Scripts
In the project directory, you can run: ```npm i && npm npm run dev``` to start the development server.

<!-- NEXT STEPS -->
## NEXT STEPS
- Add Filter by Ingredients
- Add new recipes
    - Create API POST request, I can reuse the same code from the GET request in the page/api/recipes.js file, the only difference is that I need to handle the POST request in my API using ```req.method === 'POST'``` and use req.body to get the data from the form and then create new Recipe object with body data and push it to the recipes array.
- Delete recipes
    - Create API DELETE request, I can create new route in the page/api/[recipesId.js] file, where I need to handle the DELETE request in my API using ```req.method === 'DELETE'``` and use req.params to get the id of the recipe to delete from the recipes array.

On frontend I will create a new component for each of the recipes to Update or Delete them.

<!-- CONTACT -->
## Contact
Abraham Serena - [@idkantv](https://twitter.com/idkantv) - abraham.serena.lk@gmail.com