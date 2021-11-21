import React, { Component } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { firebaseAuthentication } from "../config/firebase";

export default class Home extends React.Component {
  state = {
    user: {},
    password: "",
    email: "",
  };
  componentDidMount() {
    firebaseAuthentication.onAuthStateChanged((user) => {
      if (!user) {
        this.props.history.push("./login");
      } else {
        this.setState({ user });
      }
    });
  }
  handleLogOut = () => {
    firebaseAuthentication.signOut();
  };

  handleChangeName = (event) => {
    this.setState({
      user: { ...this.state.user, displayName: event.target.value },
    });
  };
  handleUpdateProfile = (e) => {
    e.preventDefault();
    const { displayName } = this.state.user;
    firebaseAuthentication.currentUser
      .updateProfile({
        displayName,
      })
      .then(() => {
        alert("Success Profile Updated!");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleUpdateEmail = (e) => {
    e.preventDefault();
    const { email } = this.state.email;
    firebaseAuthentication.currentUser
      .updateEmail(email)
      .then(() => {
        firebaseAuthentication.currentUser.sendEmailVerification().then(() => {
          alert("Success Email Updated!");
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleUpdatePassword = (e) => {
    e.preventDefault();
    const { password } = this.state.password;
    firebaseAuthentication.currentUser
      .updatePassword(password)
      .then(() => {
        alert("Success Password Updated!");
        this.setState({ password: "" });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    console.log(this.state.user);
    const { displayName } = this.state.user;
    return (
      <Container>
        <Paper style={{ padding: 5 }}>
          <Button onClick={this.handleLogOut}>Logout</Button>
          <h1>Halaman Home</h1>
          <Grid container>
            <Grid style={{ padding: 10 }} xs={12} md={4} item>
              <form onSubmit={this.handleUpdateProfile}>
                <TextField
                  margin="dense"
                  label="Nama"
                  value={displayName || ""}
                  onChange={this.handleChangeName}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Update Profile
                </Button>
              </form>
            </Grid>

            <Grid style={{ padding: 10 }} xs={12} md={4} item>
              <form onSubmit={this.handleUpdateEmail}>
                <TextField
                  required
                  type="email"
                  margin="dense"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Update Email
                </Button>
              </form>
            </Grid>

            <Grid style={{ padding: 10 }} xs={12} md={4} item>
              <form onSubmit={this.handleUpdatePassword}>
                <TextField
                  type="password"
                  margin="dense"
                  label="Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Update Password
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}
