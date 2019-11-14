/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dcb97a2f1ef4518a5382d3c
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import CategoryEdit from "./pages/CategoryEdit";
import CategoryList from "./pages/CategoryList";
import ItemEdit from "./pages/ItemEdit";
import ItemList from "./pages/ItemList";
import PostEdit from "./pages/PostEdit";
import PostList from "./pages/PostList";
import TagEdit from "./pages/TagEdit";
import TagList from "./pages/TagList";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/categorys/:id" component={ CategoryEdit }  />
              <PrivateRoute exact path="/categorys" component={ CategoryList }  />
              <PrivateRoute exact path="/items/:id" component={ ItemEdit }  />
              <PrivateRoute exact path="/items" component={ ItemList }  />
              <PrivateRoute exact path="/posts/:id" component={ PostEdit }  />
              <PrivateRoute exact path="/posts" component={ PostList }  />
              <PrivateRoute exact path="/tags/:id" component={ TagEdit }  />
              <PrivateRoute exact path="/tags" component={ TagList }  />
              <PrivateRoute exact path="/users/:id" component={ UserEdit }  />
              <PrivateRoute exact path="/users" component={ UserList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;