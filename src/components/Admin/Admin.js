import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { withStyles } from '@material-ui/core/styles';
//import AdminForm from '../Admin/AdminForm';
import AdminForm from '../Admin/AdminForm';
import AdminList from './AdminList';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 40,
    },
    container: {
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

class Admin extends Component {
    // Renders the entire app on the DOM
    render() {
        const { classes } = this.props;
        return (
            <div>
                <NavBar />
                <div className={classes.root}>
                    <div className={classes.container}>
                        <AdminForm />
                        <AdminList />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Admin) 