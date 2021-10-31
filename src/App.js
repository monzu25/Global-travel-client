
// import { Router } from 'react-router';
import './App.css';
import Home from './Componants/Home/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import Profle from './Componants/Profile/Profle';
import Blog from './Componants/Blog/Blog';
import Contact from './Componants/Contact/Contact';
import PageNotFound from './Componants/PageNotFound/PageNotFound';
import Footer from './Componants/Footer/Footer';
import DetailsView from './Componants/DetailsView/DetailsView';
import PrivateRoute from './Componants/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Header from './Componants/Header/Header';
import Signup from './Componants/Signup/Signup';
import Login from './Componants/Login/Login';
import ExpertTips from './Componants/ExpertTips/ExpertTips';
import Packages from './Componants/Packages/Packages';
import MyOrders from './Componants/AdminSection/AddNewPackage/MyOrders';
import ManageAllOrders from './Componants/AdminSection/AddNewPackage/ManageAllOrders';
import AddNewPackage from './Componants/AdminSection/AddNewPackage/AddNewPackage';
import PlaceOrder from './Componants/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/" title="Home">
              <Home></Home>
            </Route>
            <Route path="/home" title="Home"  >
              <Home></Home>
            </Route>
            <Route path="/packages" title="packages">
              <Packages></Packages>
            </Route>
            <Route path="/profile" title="Profile">
              <Profle></Profle>
            </Route>

            {/* Admin Section Route  */}
            <PrivateRoute path="/myOrders" title="My Orders" >
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders" title="Manage All Orders" >
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addNewPackage" title="Add New Package" >
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>

            <PrivateRoute path="/order_place/:oderId" title="Place Order">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/detail_package/:packageId" title="Details View"  >
              <DetailsView></DetailsView>
            </Route>
            <PrivateRoute path="/experttips">
              <ExpertTips></ExpertTips>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider >

    </div>
  );
}

export default App;
