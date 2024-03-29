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
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import PostActions from "../redux/actions/PostActions";

// END IMPORT ACTIONS

/** APIs

* actionsPost.create
*	@description CRUD ACTION create
*
* actionsPost.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsPost.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class PostEdit extends Component {
  // Init post
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPost.loadPost(this.props.match.params.id);
    }
    
    this.props.actionsUser.loadUserList();
  }

  // Insert props post in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      post: props.post
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.post._id) {
      this.props.actionsPost.savePost(this.state.post).then(data => {
        this.props.history.push("/posts/");
      });
    } else {
      this.props.actionsPost.createPost(this.state.post).then(data => {
        this.props.history.push("/posts/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Post Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="content"
            label="Content"
            value={this.state.post.content || ""}
            onChange={Utils.handleChange.bind(this, "post")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.post.content && this.state.post.content === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="createdAt"
            label="CreatedAt"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.post.createdAt
                ? new Date(this.state.post.createdAt)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "post", "createdAt")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="title"
            label="Title"
            value={this.state.post.title || ""}
            onChange={Utils.handleChange.bind(this, "post")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.post.title && this.state.post.title === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="updatedAt"
            label="UpdatedAt"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.post.updatedAt
                ? new Date(this.state.post.updatedAt)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "post", "updatedAt")}
            fullWidth
            autoOk
            disableFuture
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m createdBy with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="createdBy">
              CreatedBy
            </InputLabel>
            <Select
              value={this.state.post.createdBy || ""}
              onChange={Utils.handleChangeSelect.bind(this, "post")}
              inputProps={{
                id: "createdBy",
                name: "createdBy"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/posts/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPost: bindActionCreators(PostActions, dispatch),
  };
};

// Validate types
PostEdit.propTypes = { 
  actionsPost: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    post: state.PostEditReducer.post,
    listUser: state.PostEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);
