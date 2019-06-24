import React , { Component } from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';
import EditComment from './EditComment';

class ShowComment extends Component{

    render() {
        return (
            <div className="container container-fluid">
                <h1>Show All Comment</h1>
                {this.props.comments && Array.isArray(this.props.comments) && this.props.comments.map(comment => (
                    <div key={comment.id}>
                        {comment.editing ? <EditComment key={comment.id} comment={comment} /> : <Comment key={comment.id} comment={comment} />}
                    </div>
                    )
                )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state
    }
}

export default connect(mapStateToProps)(ShowComment);