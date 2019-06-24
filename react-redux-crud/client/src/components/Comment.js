import React , { Component } from 'react';
import {connect} from 'react-redux';

class Comment extends Component{

    onDelete () {
        this.props.dispatch({
            type : 'DELETE_COMMENT',
            id   : this.props.comment.id
        })
    }

    onEdit () {
        this.props.dispatch({
            type : 'EDIT_COMMENT',
            id   : this.props.comment.id
        })
    }

    render() {
        return (
            <div className="container container-fluid">
                <h2>{this.props.comment.name}</h2>
                <p>{this.props.comment.message}</p>
                <p>{this.props.comment.editing}</p>
                <button className="btn btn-info" onClick={() => this.onEdit()}>Edit</button>&nbsp;
                <button className="btn btn-danger" onClick={() => this.onDelete()}>Delete</button>
            </div>
        )
    }
}

export default connect()(Comment);