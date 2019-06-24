import React, {Component} from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import { userActions } from '../_redux/_actions';
import { history } from '../_helpers';
import { connect } from 'react-redux';

class LogoutPage extends Component {

    componentDidMount() {
        console.log('LogoutPage -> componentDidMount');
        
        this.props.dispatch(userActions.logout());

        history.push('/');
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h2>Logout completed.</h2>
                </div>
                <Footer />
            </div>
        )
    }

}

export default connect()(LogoutPage);
