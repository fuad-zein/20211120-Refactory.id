import React, { Component } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  firebaseAuthentication,
  googleProvider,
  facebookProvider,
} from "../config/firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChangeField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    firebaseAuthentication
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user.emailVerified) {
          this.props.history.push("/home");
        } else {
          alert("Email has not been verified!");
          firebaseAuthentication.signOut();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  handleLoginWithGoogle = () => {
    firebaseAuthentication
      .signInWithPopup(googleProvider)
      .then((res) => {
        if (res.user.emailVerified) {
          this.props.history.push("/home");
        } else {
          alert("Email has not been verified!");
          firebaseAuthentication.signOut();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  handleLoginWithFacebook = () => {
    firebaseAuthentication
      .signInWithPopup(facebookProvider)
      .then((res) => {
        if (res.user.emailVerified) {
          this.props.history.push("/home");
        } else {
          alert("Email has not been verified!");
          firebaseAuthentication.signOut();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid xs="4">
            <h2>Halaman Login</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField
                fullWidth
                type="email"
                margin="dense"
                variant="outlined"
                size="small"
                value={email}
                onChange={this.handleChangeField}
                name="email"
                label="Email"
                required
              />
              <TextField
                fullWidth
                type="password"
                margin="dense"
                variant="outlined"
                size="small"
                value={password}
                onChange={this.handleChangeField}
                name="password"
                label="Password"
                required
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Daftar
              </Button>
            </form>
            <Button
              onClick={this.handleLoginWithGoogle}
              variant="outlined"
              color="inherit"
              fullWidth
              style={{ marginTop: 20 }}
            >
              Login dengan Google
            </Button>
            <Button
              onClick={this.handleLoginWithFacebook}
              variant="outlined"
              color="inherit"
              fullWidth
              style={{ marginTop: 20 }}
            >
              Login dengan Facebook
            </Button>
            <p>
              Belum memiliki akun? <Link to="/registrasi">Daftar</Link>
            </p>
            <p>
              <Link to="/forgot-password">Lupa password? </Link>
            </p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
