import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import ProjectMain from "../ProjectPage/ProjectMain";
import Admin from "../Admin/Admin";

const theme = createMuiTheme({
  palette: {
    primary: {
      //light: "#33ab9f", #1c5193
      //main: "#009688", #004396
      //dark: "#00695f",
      light: "#1c5193",
      main: "#004396",
      dark: "#002859",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "Comfortaa",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(","),
    fontSize: "12"
  }
});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <Route exact path="/" component={ProjectMain} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
