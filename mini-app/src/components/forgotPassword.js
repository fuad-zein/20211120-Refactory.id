import React, { Component } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { firebaseAuthentication } from "../config/firebase";

export default class ForgotPassword extends React.Component {
  state = {
    email: "",
  };
  handleChangeField = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    firebaseAuthentication
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Check your email...");
        this.props.history.push("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    const { email } = this.state;
    return (
      <Container>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid xs="4">
            <h2>Reset Kata Sandi</h2>
            <p>
              Masukkan email yang terhubung dengan akun anda dan kami akan
              mengirimkan email instruksi untuk mengganti password.
            </p>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Kirim Permintaan
              </Button>
            </form>
            <p>
              Belum memiliki akun? <Link to="/registrasi">Daftar</Link>
            </p>
            <p>
              Sudah punya akun? <Link to="/login">Masuk</Link>
            </p>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
