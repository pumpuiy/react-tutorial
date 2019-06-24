import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { userActions, alertActions } from '../_redux/_actions';


class LoginPage extends Component {

    constructor(props) {
		super(props);
		
		const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
			dispatch(alertActions.clear());
		});
		
		// reset login status
		//dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		//input value in state
        const { name, value } = e.target;
		this.setState({ [name]: value });
		
		// clear alert on location change
		this.props.dispatch(alertActions.clear());
    }

    handleSubmit = (e) => {
		//console.log('in handleSubmit...'+e);
		e.preventDefault();
		console.log(this.state);
		this.setState({ submitted: true });
		console.log(this.state);
        const { username, password } = this.state;
		const { dispatch } = this.props;
		console.log('username['+username+'], password['+password+']');
        if (username && password) {
            console.log('call login....');
            dispatch(userActions.login(username, password));
        }
	}

    render(){

		const { loggingIn, alert } = this.props;
		console.log('loggingIn : '+loggingIn);

		const { username, password, submitted } = this.state;

		//console.log('submitted['+submitted+']');

		let imgUrl = 'images/berlin.jpg'  
		const imgStyle = {
			//margin: '40px',
			border: '5px solid pink',
			//backgroundImage : `url(${imgUrl})`

			//"background-image: url(images/bg-01.jpg);"
		  };

        return (
			<div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-form-title" style={imgStyle}>
							<span className="login100-form-title-1">
								Sign In
							</span>
						</div>

						{alert.message &&
							<div>
								<hr/>
								<div className={`alert ${alert.type}`}>{alert.message}</div>
							</div>
						}
		
						<form className="login100-form validate-form" onSubmit={this.handleSubmit}>
							
							<div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
								<span className="label-input100">Username</span>
								<input className="input100" type="text" name="username" placeholder="Enter username" onChange={this.handleChange} />
								<span className="focus-input100"></span>
							</div>
							{submitted && !username &&
								<div className="text-danger"><small>Username is required</small></div>
							}
							
							<div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
								<span className="label-input100">Password</span>
								<input className="input100" type="password" name="password" placeholder="Enter password" onChange={this.handleChange} />
								<span className="focus-input100"></span>
							</div>
							{submitted && !password &&
								<div className="text-danger"><small>Password is required</small></div>
							}
		
							<div className="flex-sb-m w-full p-b-30">
								<div className="contact100-form-checkbox">
									<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
									<label className="label-checkbox100">
										Remember me
									</label>
								</div>
		
								<div>
									<a href="#" className="txt1">
										Forgot Password?
									</a>
								</div>
							</div>
		
							<div className="form-group">
								<button className="btn btn-secondary">
									{loggingIn &&
										<span class="spinner-border spinner-border-sm"></span>
									}  
									&nbsp;&nbsp;Login&nbsp;&nbsp; 
								</button>
								<Link to="/register" className="btn btn-link">Register</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
        )
    }
}

function mapStateToProps(state) {
	console.log('LoginPage -> mapStateToProps ...');
	const { loggingIn } = state.authentication;
	const { alert } = state;
    return {
		loggingIn,
		alert
    };
}

export default connect(mapStateToProps)(LoginPage);