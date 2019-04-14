import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import ProjectMain from "../ProjectPage/ProjectMain";
import Admin from "../Admin/Admin";

// initalize the material UI theme to be used and define the primary color of the theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4caf50",
      main: "#388e3c",
      dark: "#1b5e20",
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
