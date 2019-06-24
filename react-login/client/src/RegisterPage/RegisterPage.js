import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, alertActions } from '../_redux/_actions';

class RegisterPage extends Component {

    constructor (props) {
        super(props);

        this.state = {
            user : {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange (e) {
		//input value in state
        const { name, value } = e.target;
        const { user } = this.state;
		this.setState({
            user : {
                ...user,
                [name]: value 
            }
        });

        // clear alert on location change
		this.props.dispatch(alertActions.clear());
        
    }

    handleSubmit (e){
        e.preventDefault();

        console.log('in handleSubmit...');
        //console.log(this.state);

        console.log('..set sumitted -> true');
        this.setState({ submitted: true });
        //console.log(this.state);

        const { user, submitted } = this.state;
        //console.log(user);
        //console.log(submitted);

        this.props.dispatch(userActions.register(user));

    }

    render(){

        let imgUrl = 'images/berlin.jpg'  
		const imgStyle = {
            //margin: '40px',
            border: '5px solid pink',
            //backgroundImage : `url(${imgUrl})`

            //"background-image: url(images/bg-01.jpg);"
        };

        const { registering, alert  } = this.props;
        const { user,  submitted} = this.state;

        return (
            <div className="limiter">
				<div className="container-login100">
					<div className="wrap-login100">
						<div className="login100-form-title" style={imgStyle}>
							<span className="login100-form-title-1">
								Register
							</span>
						</div>

                        {alert.message &&
							<div>
								<hr/>
								<div className={`alert ${alert.type}`}>{alert.message}</div>
							</div>
						}

                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8 flex validate-form ">
                                <form name="form" onSubmit={this.handleSubmit}>
                                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                        {submitted && !user.firstName &&
                                            <div className="help-block">First Name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                                        {submitted && !user.lastName &&
                                            <div className="help-block">Last Name is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                        {submitted && !user.username &&
                                            <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                        {submitted && !user.password &&
                                            <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-4"></div>
                                            <div className="">
                                            <button className="btn btn-primary">Register</button>
                                                {registering && 
                                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                                }
                                                <Link to="/login" className="btn btn-link">Cancel</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    const { alert } = state;
    return {
        registering,
        alert
    };
}

export default connect(mapStateToProps)(RegisterPage);