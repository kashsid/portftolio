import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectItem from "./ProjectItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  container: {
    maxWidth: 1000,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class ProjectList extends Component {
  // send fetch dispatch to redux which will return all items from 'projects' table on database
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_PROJECTS" });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid container spacing={8} direction="row" justify="flex-start">
            {this.props.projects.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default withStyles(styles)(connect(mapReduxStateToProps)(ProjectList));
