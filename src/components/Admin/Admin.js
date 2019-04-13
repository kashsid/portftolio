import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
//import AdminForm from '../Admin/AdminForm';
import AdminForm from '../Admin/AdminForm';



class Admin extends Component {
    // Renders the entire app on the DOM
    render() {

        return (
            <div>
                <NavBar />
                {/* <AdminForm /> */}
                <AdminForm />
            </div>
        );
    }
}

export default Admin; 