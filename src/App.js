import React ,{useEffect}from 'react'
import Home from "./container/Home";
import { Route,Switch } from 'react-router-dom';
import Signin from './container/Signin';
import Signup from './container/Signup';
import Category from './container/Category';
import Order from './container/Order';
import Product from './container/Product';
import Page from './container/Page';
import Profile from './container/Profile';
import { isUserLoggedIn } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/HOC';
/**
* @author
* @function App
**/

const App = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state=>state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);
  
  return (
  <div>
    <Switch>
      <PrivateRoute exact path = "/" component={Home}/>
      <Route exact path = "/signin" component={Signin}/>
      <Route exact path = "/signup" component={Signup}/>
      <PrivateRoute exact  path = "/category" component={Category}/>
      <PrivateRoute  exact path = "/order" component={Order}/>
      <PrivateRoute exact path = "/product" component={Product}/>
      <PrivateRoute exact path = "/page" component = {Page}/>
      <PrivateRoute exact path = "/profile" component = {Profile}/>
       
    </Switch>
  </div>
   )
 }

export default App