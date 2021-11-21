// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Registrasi from "./components/registrasi";
import ForgotPassword from "./components/forgotPassword";

function App() {
  return (
    <Router>
      <Route path={["/home", "/"]} exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registrasi" component={Registrasi} />
      <Route path="/forgot-password" component={ForgotPassword} />
    </Router>
  );
}

export default App;
