import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import fire from "../config/fire";
import AccountModal from "./AccountDetailsModal";
import WorkoutModal from "./LogWorkoutModal";

// import Signup from "./SignupModal";

class Home extends Component {
  handleLogout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Spartan Calisthenics</h1>
                <h2>A better way to train.</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <Nav
              navbar
              style={{
                marginRight: "auto",
              }}
            >
              <NavItem>
                <AccountModal
                  renderAccount={(toggleAccount) => (
                    <NavLink
                      onClick={toggleAccount}
                      className="nav-link logged-in"
                      data-target="modal-account"
                      to="#"
                    >
                      Account
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <WorkoutModal
                  renderWorkout={(toggleWorkout) => (
                    <NavLink
                      onClick={toggleWorkout}
                      className="nav-link logged-in"
                      to="#"
                      data-target="modal-exercise"
                    >
                      Log Workout
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.handleLogout}
                  className="nav-link logged-in"
                  to="#"
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Home;