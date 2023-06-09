import React from 'react';
import './App.css';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeInProgress from './pages/RecipeInProgress';
import RecipesDetails from './pages/RecipeDetails';

function App() {
  return (
    <main className="root">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals/:id/in-progress" component={ RecipeInProgress } />
        <Route path="/meals" component={ Recipes } />
        <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
        <Route path="/drinks" component={ Recipes } />
        <Route exact path="/meals" component={ Recipes } />
        <Route exact path="/meals/:id" component={ RecipesDetails } />
        <Route exact path="/drinks" component={ Recipes } />
        <Route exact path="/drinks/:id" component={ RecipesDetails } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="/profile" component={ Profile } />
        <Route path="/done-recipes" component={ DoneRecipes } />
      </Switch>
    </main>
  );
}

export default App;
