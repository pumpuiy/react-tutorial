import React , { Component } from 'react';
import {connect} from 'react-redux';

class CommentForm extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value; //ดึงค่าจากตัวแปร getName
        const message = this.getMessage.value; //ดึงค่าจากตัวแปร getMessage
        const data = {
            id : new Date(),
            name : name,
            message : message,
            editing : false
        }

        this.props.dispatch({
            type : 'ADD_COMMENT',
            data
        })

        this.getName.value = '';
        this.getMessage.value = '';
        //console.log(data);
    }

    render() {
        return (
            <div className="container container-fluid">
                <h1>Add Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=> this.getName = input} /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=> this.getMessage = input} /><br /><br />
                    <button className="btn btn-secondary">Comment</button>
                </form>
            </div>
        )
    }
}

export default connect()(CommentForm);