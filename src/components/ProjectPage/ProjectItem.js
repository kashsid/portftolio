import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import "./ProjectItem.css";

// defines the cards theme and styles
const styles = theme => ({
  card: {
    backgroundColor: "RGBA(59,255,0,0.68)"
  },
  media: {
    height: 0,
    paddingTop: "67.25%" // 16:9,
  },
  actions: {
    display: "flex"
  },
  //  for my stretch goals may be
  // expand: {
  //   transform: "rotate(0deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest
  //   })
  // },
  // expandOpen: {
  //   transform: "rotate(0deg)"
  // },
  avatar: {
    backgroundColor: "#33ab9f"
  }
});

class ProjectItem extends Component {
  state = {
    expanded: false,
    toggle: false
  };

  // for potential future use
  // handleExpandClick = () => {
  //     this.setState(state => ({ expanded: !state.expanded }));
  // };

  // formats date on card
  formatDate = () => {
    const date = this.props.project.date_completed;
    return (
      new Date(date).getMonth() +
      1 +
      "/" +
      new Date(date).getDate() +
      "/" +
      new Date(date).getFullYear()
    );
  };

  toggleHeart = () => {
    if (!this.state.heartToggle) {
      this.setState({
        heartToggle: true
      });
    } else {
      this.setState({
        heartToggle: false
      });
    }
  };

  // outputs version of heart icon to DOM based on current state of 'heartToggle'
  displayHeart = () => {
    if (this.state.heartToggle) {
      return <FavoriteIcon style={{ color: "#d50000" }} />;
    } else {
      return <FavoriteIcon />;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                style={{ marginRight: "-49px" }}
                aria-label="initials"
                className={classes.avatar}
                src="/images/kash.png"
              />
            }
            // for potential future use
            // action={
            //     <IconButton>
            //         <MoreVertIcon />
            //     </IconButton>
            // }
            title={this.props.project.name}
            subheader={this.formatDate()}
          />
          <div className="card-image">
            <CardMedia
              style={{ height: "60px" }}
              className={classes.media}
              image={this.props.project.thumbnail}
              title={this.props.project.name}
            />
          </div>
          <CardContent
            style={{ marginTop: "3px", marginBottom: "3px", height: "90px" }}
          >
            <Typography component="p">
              {this.props.project.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="Add to favorites"
              onClick={this.toggleHeart}
            >
              {this.displayHeart()}
            </IconButton>
            <IconButton aria-label="github">
              <a
                href={
                  !this.props.project.github
                    ? "https://github.com"
                    : this.props.project.github
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github fa-lg" />
              </a>
            </IconButton>
            <Typography style={{ marginRight: "8px", marginLeft: "4px" }}>
              tags:{" "}
            </Typography>
            <Chip
              label={this.props.project.tag_name}
              className={classes.chip}
              variant="outlined"
            />
            {/* 
                            // for potential future use
                            <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton> */}
          </CardActions>
          {/* 
                        // for potential future use
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>TBD</Typography>
                            <Typography paragraph>
            
                                    </Typography>
                            <Typography paragraph>
                
                                    </Typography>
                        </CardContent>
                    </Collapse> */}
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProjectItem);
