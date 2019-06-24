import React, {Component} from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { connect } from 'react-redux';
import { userActions, alertActions } from '../_redux/_actions';

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        console.log('HomePage --> componentDidUpdate');
        // clear alert on location change
		//this.props.dispatch(alertActions.clear());
    }

    componentDidMount() {
        console.log('HomePage --> componentDidMount');
        this.props.dispatch(userActions.getAll());
    }

    componentWillMount() {
        document.removeEventListener("click", this.closeMenu);
    }
    handleDeleteUser(user) {
        console.log('HomePage --> handleDeleteUser');
        return (e) => this.props.dispatch(userActions._delete(user));
    }

    render(){

        const { user, users, alert } = this.props;
        const userLoggedIn = JSON.parse(localStorage.getItem('user')) || {};

        return (
            <div>
                <Header />
                <div>
                {alert.message &&
                    <div>
                        <hr/>
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    </div>
                }
                <h3><u>List All Users in System.</u></h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <div className="title mt-2" key={user.id}>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : (userLoggedIn.username != user.username) ? <span> - <button className="btn btn-danger btn-sm" onClick={this.handleDeleteUser(user)}>Delete</button></span> : ""
                                    }
                                </li>
                            </div>
                        )}
                    </ul>
                }
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('HomePage -> mapStateToProps...');
    //console.log(state);

    const { users, authentication, alert } = state;
    const { user } = authentication;

    return {
        user,
        users,
        alert
    }
        
}

export default connect(mapStateToProps)(HomePage);