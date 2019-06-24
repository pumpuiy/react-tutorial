import React , { Component } from 'react';
import {connect} from 'react-redux';

class EditComment extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const name = this.getName.value; //ดึงค่าจากตัวแปร getName
        const message = this.getMessage.value; //ดึงค่าจากตัวแปร getMessage

        const newdata = {
            name,
            message
        }
        //console.log(data);

        this.props.dispatch({
            type : "UPDATE_COMMENT",
            id : this.props.comment.id,
            data : newdata
        });

    } 

    render() {

        let {name = "", message = ""} = this.props.comment;

        return (
            <div className="container container-fluid">
                <h1>EDIT Comment</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=> this.getName = input} defaultValue={name} /><br /><br />
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=> this.getMessage = input} defaultValue={message} /><br /><br />
                    <button className="btn btn-secondary">Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(EditComment);